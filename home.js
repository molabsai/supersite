if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded',afterDOMLoaded);
} else {
    afterDOMLoaded();
}
function afterDOMLoaded(){
    //Everything that needs to happen after the DOM has initially loaded.
    $(".super-navbar").after( "<img src='https://github.com/molabsai/supersite/raw/master/hero.jpg' class='hero' />" );

} 
