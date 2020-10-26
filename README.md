<h1> Balloon Pop </h1>


<h2> Table of Contents: </h2>
<ul>
<li> <a href="gm"> General Information </a> </li>
<li> <a href=""> Technologies </a> </li>
<li> <a href=""> Setup </a> </li>

</ul>

<div id="gm">
<h3> Overview </h3>
<p> 
Game that can be played in the internet browser, which is also compatible with mobile phones.
</p>

<h4> Game Instructions </h4>
<ul>
<li> Goal is to pop as many balloons as possible, before the time runs out. </li>
<li> The time limit set for this game is 10 seconds. </li> 
<li> To start popping balloons you click the pink pump. </li>
<li> To start the game you must enter your name, and later can change players if you'd like.</li>
<li> The top score is recorded and shown in the scoreboard. </li>
</ul>
</div>

<h4> Snapshots </h4>
<ul>
<li> Start Screen </li>
<img src="/image/start-screen.png" align="center">
<br>

<li> Change Player Screen </li>
<img src="/image/Change-player.png" align="center">
<br>

<li> Game Screen </li>
<img src="/image/Game.png" align="center">
<br>

<li> Final Screen</li>
<img src="/image/balloon-pop-screenshot-1.png" align="center"> 
<br>
</ul>

<summary> 
        Code Functionality 
</summary>
        <ul> 
            <li> The game connects HTML, CSS, JavaScript files togethor (DOM)</li>
            <li> Basic form input manipulation </li>
            <li> The data given as input will be stored as an player object: 
                <ul>
                <li> Which will be stored and loaded into and from browsers local storage </li>
                <li> The data for the score will be updated everytime the new score is higher than the previous score</li>
                <li>If the game is already played and the players were to refresh the page, the score will still exist as it's stored in the local browser </li>
                <li> The data can be cleared manually by going to the browser's local storage and doing so needs the page to be reloaded </li>
                <li> Finally the score also sorts the score from highest to lowest, highest being top and lowest being the bottom </li>
                </ul>
            </li>
            <li>This game works on mobile phone as well, as the screen width has been adjusted in CSS file</li>
        </ul>
</details>



