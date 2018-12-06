var APP_ID = 'uDJ80XLtVaUHIOqaupktpg2y-gzGzoHsz'
var APP_KEY = 'sl97pN6nxvkhNWxz0SWh8ajl'
AV.init({ appId: APP_ID, appKey: APP_KEY })
 var query=new AV.Query('Message')
 query.find().then(
     function(messages){
     
     let array=messages.map((item)=>item.attributes)
     array.forEach((item)=>{
         
         let li =document.createElement('li')
         li.innerText=`${item.name} : ${item.content}`
         let messageList=document.querySelector('#messageList')

         messageList.append(li)
     })
  }
 )
 
 let myForm=document.querySelector('#postMessageForm')
 
 myForm.addEventListener('submit',function(e){
   
     e.preventDefault()
     let content=myForm.querySelector('input[name=content]').value
     let name=myForm.querySelector('input[name=name]').value
     var Message=AV.Object.extend('Message')
     var message=new Message()
     
     message.save({
         'name':name,
         'content':content
         
     }).then(function(Object){
        let li =document.createElement('li')
        li.innerText=`${Object.attributes.name} : ${Object.attributes.content}`
        let messageList=document.querySelector('#messageList')

        messageList.append(li)
        // window.location.reload()
       //console.log(Object)
       myForm.querySelector('input[name=content]').value=''
       myForm.querySelector('input[name=name]').value=''  
     })
 })

