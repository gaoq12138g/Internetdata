import XLSX from 'xlsx'

export function importExcel(file){
    return new Promise(function(resolve, reject){
        var importData = [];
        var rABS = false;
        FileReader.prototype.readAsBinaryString = function(f) {
            var binary = "";
            var rABS = false; 
            var pt = this;
            var workbook;
            var reader = new FileReader();
            reader.onload = function(e) {
                try {
                    var bytes = new Uint8Array(reader.result);
                    var length = bytes.byteLength;
                    for(var i = 0; i < length; i++) {
                        binary += String.fromCharCode(bytes[i]);
                    }
                    if(rABS) {
                        workbook = XLSX.read(btoa(fixdata(binary)), { 
                            type: 'base64'
                        });
                    }else {
                        workbook = XLSX.read(binary, {
                            type: 'binary'
                        });
                    }
                } catch(e) {
                    console.log('文件类型不正确');
                    reject('文件类型不正确');
                    return;
                }
                var fromTo = '';
                for (var sheet in workbook.Sheets) {
                    if (workbook.Sheets.hasOwnProperty(sheet)) {
                        fromTo = workbook.Sheets[sheet]['!ref'];
                        importData = importData.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                    }
                }
                resolve(importData);
            };
            reader.onerror = function(e){
                reject('文件类型不正确');
            };
            reader.readAsArrayBuffer(f);
        }

        var reader = new FileReader();
        if(rABS) {
            reader.readAsArrayBuffer(file);
        }else {
            reader.readAsBinaryString(file);
        }
    });
}