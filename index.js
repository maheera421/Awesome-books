function extractValues(){
    const a1=document.getElementById('text1').value;
    const a2=document.getElementById('text2').value;
    const Tag=document.createElement('p');
    
    //const author=document.createTextNode(a1);
    //const title=document.createTextNode(a2);
    Tag.textContent=a1;
    Tag.append(' by ');
    Tag.append(a2);
    Tag.setAttribute('class','Book_Name')
    const parent=document.getElementById('java_container');
    parent.append(Tag);
    
    const remove=document.createElement('button');
    const buttonText=document.createTextNode('Remove');
    remove.append(buttonText);
    remove.setAttribute('class','Remove_Button')
    Tag.append(remove);

    remove.addEventListener('click',function(){
    parent.removeChild(Tag);
    
})

}
