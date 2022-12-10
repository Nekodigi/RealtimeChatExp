

export async function downloadFile(url_, name) {
    let resp = await fetch(url_);
    let url = window.URL.createObjectURL(await resp.blob());//clone local and download
    console.log(url);
    const a = document.createElement('a');
    a.style.display = "none";
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  }