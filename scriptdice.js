var cnt = 1
function calc()
{
    var guess = Math.floor(Math.random()*6)+1
    var p1 = parseInt(document.getElementById('ip1').value)
    var p2 = parseInt(document.getElementById('ip2').value)
if (cnt%2 == 1)
{
    p1= p1+guess
    document.getElementById('dice').value= guess
    document.getElementById('ip1').value=p1
    cnt=cnt+1

    if (p1>=30)
    {
        document.getElementById('op').innerHTML="Player 1 wins"
    }
}
else
{
    p2=p2+guess
    document.getElementById('dice').value= guess
    document.getElementById('ip2').value=p2
    cnt=cnt+1
    if(p2>=30)
    {
        document.getElementById('op').innerHTML="Player 2 wins!"
    }

}
}