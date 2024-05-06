const get_news = () => {
    let article_one = document.getElementById("1");
    let article_two = document.getElementById("2");
    let article_three = document.getElementById("3");
    fetch("https://api.thenewsapi.com/v1/news/top?api_token=maKCVT3Jz9isYLXGSmbmYl6YTavmOCfeVpWqvoSA&locale=us&search=bangladesh%20health&limit=3")
    .then((response) => response.json())
    .then((json) => {
      console.log(json["data"]);
      article_one.querySelector('div').querySelector('h2').textContent = json["data"][0]["title"]; 
      article_one.querySelector('div').querySelector('h6').textContent = "Published on " + json["data"][0]["published_at"].split("T")[0];       
      article_one.querySelector('div').querySelector('p').textContent = json["data"][0]["description"];
      article_one.querySelector('div').querySelector('h5').textContent = "Source: " + json["data"][0]["source"];
      article_one.querySelector('img').src = json["data"][0]["image_url"];
      article_one.querySelector('a').href = json["data"][0]["url"];
      article_two.querySelector('div').querySelector('h2').textContent = json["data"][1]["title"]; 
      article_two.querySelector('div').querySelector('h6').textContent = "Published on " + json["data"][1]["published_at"].split("T")[0];       
      article_two.querySelector('div').querySelector('p').textContent = json["data"][1]["description"];
      article_two.querySelector('div').querySelector('h5').textContent = "Source: " + json["data"][1]["source"];
      article_two.querySelector('img').src = json["data"][1]["image_url"];
      article_two.querySelector('a').href = json["data"][1]["url"];
      article_three.querySelector('div').querySelector('h2').textContent = json["data"][2]["title"]; 
      article_three.querySelector('div').querySelector('h6').textContent = "Published on " + json["data"][2]["published_at"].split("T")[0];       
      article_three.querySelector('div').querySelector('p').textContent = json["data"][2]["description"];
      article_three.querySelector('div').querySelector('h5').textContent = "Source: " + json["data"][2]["source"];
      article_three.querySelector('img').src = json["data"][2]["image_url"];
      article_three.querySelector('a').href = json["data"][2]["url"];
    });
}
