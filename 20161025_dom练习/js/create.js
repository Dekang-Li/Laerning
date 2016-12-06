(function(){
	var imgList = document.querySelector('#imgList');
		//console.log(data.length);
	for(var i = 0 ; i < data.length; i++){// 循环数组
		var ul = document.createElement("ul");//创建ul
		for(var j = 0; j < data[i].length; j++){//循环数组下面子数组里面的对象
			var liData = data[i][j];//设置变量储存当前的对象
			var li = document.createElement("li");//创建li
			var imgs = document.createElement("div");//创建div = 'imgs'
			imgs.className = "imgs";

			/* 创建a标签中的标签 */
			var a = document.createElement("a");
			var img = new Image();//创建img对象
			var gradient  = document.createElement('span');
			var title = document.createElement('strong');
			var author = document.createElement('span');
			var playIco = document.createElement('span');
			gradient.className = 'gradient';
			title.className = 'title';
			author.className = 'author';
			playIco.className = 'playIco';

			img.src = liData.src;
			title.innerHTML = liData.title;
			author.innerHTML = liData.author;
			
			/* 向a标签中添加元素 */
			a.appendChild(img);
			a.appendChild(gradient);
			a.appendChild(title);
			a.appendChild(author);
			a.appendChild(playIco);
			
			
			imgs.appendChild(a); //将a标签放入div = 'imgs'中
			
			
			if(i==0&&j==0){ //如果是第一个ul下的第一个li 则其ID为index
				li.id = "index";
			}
			li.appendChild(imgs);
			ul.appendChild(li);
		}
		imgList.appendChild(ul);//将ul添加到imgList中
	}
}
)();