let n =1
getPage.onclick =()=>{
    const request = new XMLHttpRequest();
    request.open("GET",`/page${n+1}`);
    request.onreadystatechange =()=>{
        if(request.readyState===4 && request.status===200){
            const array =JSON.parse(request.response);
            array.forEach(item=>{
                const li =document.createElement('li');
                li.textContent =item.id;
                xxx.appendChild(li);
            });
            n+=1;
        }
    };
    request.send();
};

getJSON.onclick =()=>{
    const request =new XMLHttpRequest();
    request.open("GET","/5.json");
    request.onreadystatechange =()=>{
        if(request.readyState===4 &&request.status===200){
            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    };
    request.send()
};

getXML.onclick =()=>{
    const request = new XMLHttpRequest();
    request.open("GET","/4.xml");
    request.onreadystatechange = ()=>{
        if(request.readyState===4){
            if(request.status>=200 && request.status<300){
                const dom = request.responseXML;
                const text =dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    };
    request.send()
};

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("GET","/3.html");
    request.onload =()=>{
        const div = document.createElement('div');
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror =()=>{
        console.log('失败了')
    }
    request.send();
};

getJS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open("GET","/2.js");
    request.onload = ()=>{
        // console.log(request,response)
        //创建script 标签
        const script =document.createElement('script')
        //填写script 内容
        script.innerHTML = request.response
        //将script插入body里面
        document.body.appendChild(script)
    }
    request.onerror = ()=>{ console.log('失败了')};
    request.send();
};


getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css"); // readyState = 1
    request.onreadystatechange = () => {
      console.log(request.readyState);
      // 下载完成，但不知道是成功 2xx 还是失败 4xx 5xx
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 300) {
          // 创建 style 标签
          const style = document.createElement('style');
          // 填写 style 内容
          style.innerHTML = request.response;
          // 插到头里面
          document.head.appendChild(style);
        } else {
          alert("加载 CSS 失败");
        }
      }
    };
    request.send(); // readyState = 2
  };
  