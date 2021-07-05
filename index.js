var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
var showQuote = document.querySelector('#quote')



$('#fetch').click(()=>{

const getData = async ()=>{
 const res = await fetch(url)
 const data = await res.json()
 console.log(data[0]);

 showQuote.innerHTML = data[0]
}
    
getData()

})

$('#axios').click(()=>{

   axios.get(url)
   .then((res)=>{
    console.log(res.data[0]);
    showQuote.innerHTML = res.data[0]
   })
    
})
    
$('#jquery').click(()=>{

    $.getJSON(url)
   .done((res)=>{
        console.log(res);
        showQuote.innerHTML = res[0]
    }).fail(()=>{
        console.log('error');
    })

    
     
 })

 $('#xhr').click(()=>{

    var XHR = new XMLHttpRequest()

    XHR.onreadystatechange =() =>{

        if(XHR.readyState == 4 && XHR.status == 200){
            var data = JSON.parse(XHR.responseText)
            showQuote.innerHTML = data[0]
        }

    }
    
    XHR.open('GET', url);
    XHR.send()
     
 })
     
     




// const fetchData = async ()=>{

//     const res = await fetch(url)
//     const data = await res.json();
//     console.log(data.results[0]);
// }

// fetchData()

// axios.get(url,{
//     params: {id: 4}
// })
// .then((res)=>{
// console.log(res.data.results[0]);
// })
// .catch(()=>{
//     console.log('ERROR');
// })

