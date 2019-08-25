function fox_tap(ele,fn){
	var flag=true;
	var limitTime=250;
	var startTime;
	ele.addEventListener("touchstart",function(e){
		startTime=Date.now();
		flag=true;
	})
	ele.addEventListener("touchmove",function(e){
		flag=false;
	})
	ele.addEventListener("touchend",function(event){
		
//		if(flag){
//			var allTime=Date.now()-startTime;
//			//console.log(allTime)
//			if(allTime<limitTime){
//				console.log("触发点击事件");
//				if(fn){
//					fn(event);
//				}
//			}
//		}
		
		
//		var allTime=Date.now()-startTime;
//		if(flag&&allTime<limitTime){
//			
//				if(fn){
//					fn(event);
//				}
//			
//		}
		
		
		var allTime=Date.now()-startTime;
		if(flag==false){
			return;
		}
		if(allTime>limitTime){
			return;
		}
		fn(event);
	});
	
}
