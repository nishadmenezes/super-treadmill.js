# super-treadmill
A simple jQuery-CSS plugin that can be used to cycle through HTML elements in a super awesome treadmill fashion!

## HTML ##

```html
<div id="mytreadmill" class="treadmill">
				<div class="treadmill-unit">
					<h2>Monkey biz</h2>
					<p>Organic art trust fund photo booth skateboard fanny pack, Neutra before they sold kale chips four cardigan.</p>
					<hr />
				</div>
				<div class="treadmill-unit">
					<h2>Short stock</h2>
					<p>Organic art trust fund photo booth skateboard fanny pack, Neutra before they sold kale chips four cardigan.</p>
					<hr />
				</div>
				<div class="treadmill-unit">
					<h2>Liver transplant</h2>
					<p>Organic art trust fund photo booth skateboard fanny pack, Neutra before they sold kale chips four cardigan.</p>
					<hr />
				</div>
				<div class="treadmill-unit">
					<h2>Rumbling charm</h2>
					<p>Organic art trust fund photo booth skateboard fanny pack, Neutra before they sold kale chips four cardigan.</p>
					<hr />
				</div>
</div>
```

## CSS ##

```css
.treadmill {
	overflow: hidden;
	/*optional stylings*/
	/*border: 1px solid black;*/
	/*height: 332px;*/
}

.treadmill-unit {
	overflow: hidden;
	position: relative;
}
```

## jQuery-Usage ##

Default options:

```javascript
$(document).ready(function() {
  $('#mytreadmill').startTreadmill();
});
```

Move Treadmill Upwards or Downwards:

```javascript
$(document).ready(function() {
  $('#mytreadmill1').startTreadmill({ direction: "up"});
  $('#mytreadmill2').startTreadmill({ direction: "down"});
});
```

Change Treadmill Speed:

```javascript
$(document).ready(function() {
  $('#mytreadmill1').startTreadmill({ diection: "up", speed: "slow"});
  $('#mytreadmill2').startTreadmill({ diection: "up", speed: "medium"});
  $('#mytreadmill3').startTreadmill({ diection: "down", speed: "fast"});
  $('#mytreadmill4').startTreadmill({ direction: "down", speed: 1500});
});
```

Set Treadmill Height Based on Viewable Units:

```javascript
$(document).ready(function() {
  //sets the height of the treadmill to 3 times the height of the first unit
  $('#mytreadmill1').startTreadmill({ diection: "up", speed: "slow", viewable: 3});
});
```

Pause Treadmill on mouse entry and exit:

```javascript
$(document).ready(function() {
  $('#mytreadmill1').startTreadmill({ diection: "up", speed: "slow", viewable: 3, pause: true});
});
```

Set runAfterLoad option to false and use in combination with the pause as option:

```javascript
$(document).ready(function() {
  //will start treadmill only when the mouse is on the treadmill
  $('#mytreadmill1').startTreadmill({ diection: "up", speed: "fast", viewable: 3, pause: false, runAfterLoad: false});
});
```

## Options ##

* __direction__ - move the treadmill "up" or "down".
* __speed__ - set the speed to fixed "slow", "medium" or "fast" or custom value.
* __viewable__ - number of units viewable at a time : sets the height of the treadmill to viewable times the 1st unit.
* __pause__ - pause or unpause the treadmill when mouse enters or exits treadmill and vice-versa.
* __runAfterPageLoad__ - can be used in combination with pause to create opposite behaviour.
