	var uiMediaScanner = null, imageFilter = null, imageBrowser = null, bMap = null;
		function imgCompress(imgsrc, quality, scale, ext, callback) {
			// 压缩文件的保存目录
			var savePath = api.cacheDir + "/" + getNowFormatDate() + "/";
			// 压缩文件生成的随机文件名称
			var savename = NewGuid() + "." + ext;
			imageFilter.compress({
				img : imgsrc,
				quality : quality,
				scale : quality,
				save : {
					album : false,
					imgPath : savePath,
					imgName : savename
				}
			}, function(ret, err) {
				if (ret) {
					callback(savePath + savename);
				} else {
					alert(JSON.stringify(err));
				}
			});
		}
		
		function NewGuid() {
			function S4() {
				return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
			}

			return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
		}

		// 获取文件拓展名
		function getExt(fileName) {
			return fileName.substring(fileName.lastIndexOf('.') + 1);
		}

		function getNowFormatDate() {
			var date = new Date();
			var seperator1 = "-";
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var strDate = date.getDate();
			if (month >= 1 && month <= 9) {
				month = "0" + month;
			}
			if (strDate >= 0 && strDate <= 9) {
				strDate = "0" + strDate;
			}
			var currentdate = year + seperator1 + month + seperator1 + strDate
			return currentdate;
		}
