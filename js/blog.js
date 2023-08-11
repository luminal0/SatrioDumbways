let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let startDate = document.getElementById("input-blog-startDate").value
  let endDate = document.getElementById("input-blog-endDate").value
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  image = URL.createObjectURL(image[0]);
  console.log(image);

  let start = new Date(startDate);
  let end = new Date(endDate);

  if (start > end) {
    return alert("You Fill End Date Before Start Date");
  }

  let difference = end.getTime() - start.getTime();
  let days = difference / (1000 * 3600 * 24);
  let weeks = Math.floor(days / 7);
  let months = Math.floor(weeks / 4);
  let years = Math.floor(months / 12);
  let duration = "";

  if (days > 0) {
    duration = days + " Hari";
  }
  if (weeks > 0) {
    duration = weeks + " Minggu";
  }
  if (months > 0) {
    duration = months + " Bulan";
  }
  if (years > 0) {
    duration = years + " Tahun";
  }

  

  let blog = {
    title,
    duration,
    content,
    image,
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
    document.getElementById("contents").innerHTML = "";
    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("contents").innerHTML += `
                <div class="container-card">
                    <div class="card-content">
                        <img src="${dataBlog[index].image}" alt="gambar">
                        <h1>
                            <a href="blog-detail.html" target="_blank">
                            ${dataBlog[index].title}
                            </a>
                        </h1>
                        <p>durasi : ${dataBlog[index].duration}</p>
                        <div id="container-desc">
                        ${dataBlog[index].content}
                        </div>
                        <div>
                          <i class="fa-brands fa-google-play"></i>
                          <i class="fa-brands fa-android"></i>
                          <i class="fa-brands fa-java"></i>
                        </div>
                        <div class="ctn-btn">
                            <div class="btn-left">
                                <button>edit</button>
                            </div>
                            <div class="btn-right">
                                <button>delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
}