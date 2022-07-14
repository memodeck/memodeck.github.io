const deckOn = true;




//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
/*
arr.forEach(function callback(currentValue, index, array) {
    //your iterator
}[, thisArg]);
*/
/*
Via JavaScript

Enable manually with:

var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
  return new bootstrap.Offcanvas(offcanvasEl)
})

Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to data-bs-, as in data-bs-backdrop="".

Name 		Type 		Default 	Description
-----------------------------------------------
backdrop 	boolean 	true 		Apply a backdrop on body while offcanvas is open
keyboard 	boolean 	true 		Closes the offcanvas when escape key is pressed
scroll 		boolean 	false 		Allow body scrolling while offcanvas is open

Method 					Description
-----------------------------------
toggle 					Toggles an offcanvas element to shown or hidden. Returns to the caller before the offcanvas element has actually been shown or hidden (i.e. before the shown.bs.offcanvas or hidden.bs.offcanvas event occurs).
show 					Shows an offcanvas element. Returns to the caller before the offcanvas element has actually been shown (i.e. before the shown.bs.offcanvas event occurs).
hide 					Hides an offcanvas element. Returns to the caller before the offcanvas element has actually been hidden (i.e. before the hidden.bs.offcanvas event occurs).
getInstance 			Static method which allows you to get the offcanvas instance associated with a DOM element
getOrCreateInstance 	Static method which allows you to get the offcanvas instance associated with a DOM element, or create a new one in case it wasn’t initialised

Event type 				Description
-----------------------------------
show.bs.offcanvas 		This event fires immediately when the show instance method is called.
shown.bs.offcanvas 		This event is fired when an offcanvas element has been made visible to the user (will wait for CSS transitions to complete).
hide.bs.offcanvas 		This event is fired immediately when the hide method has been called.
hidden.bs.offcanvas 	This event is fired when an offcanvas element has been hidden from the user (will wait for CSS transitions to complete).
*/


/*
// getStart
$d.find('#getStart').on('click', function () {
	$d.find('#greetings').style['display'] = "none"; // "block"
	$d.find('#card').style['display'] = "block";
});

*/

// deck
let memodeck = (function (onoff) {

//function deckofcards($app = {}) {

    //‰%%%%%%%%%%%%%%%%%%%
    
    let $_cards = {elts:[
		{id:1,rankstr:'Т',rank:0,suit:0,code:'ПаТефон',image:''},
		{id:2,rankstr:'2',rank:1,suit:0,code:'ПТица',image:''},
		{id:3,rankstr:'3',rank:2,suit:0,code:'ПиКа',image:''},
		{id:4,rankstr:'4',rank:3,suit:0,code:'ПеЧь',image:''},
		{id:5,rankstr:'5',rank:4,suit:0,code:'ПиПетка',image:''},
		{id:6,rankstr:'6',rank:5,suit:0,code:'ПуШка',image:''},
		{id:7,rankstr:'7',rank:6,suit:0,code:'ПиСьмо',image:''},
		{id:8,rankstr:'8',rank:7,suit:0,code:'ПиВо',image:''},
		{id:9,rankstr:'9',rank:8,suit:0,code:'ПеРец',image:''},
		{id:10,rankstr:'10',rank:9,suit:0,code:'ПуГовица',image:''},
		{id:11,rankstr:'В',rank:10,suit:0,code:'ПаВлин',image:''},
		{id:12,rankstr:'Д',rank:11,suit:0,code:'ПуДра',image:''},
		{id:13,rankstr:'К',rank:12,suit:0,code:'ПаКет',image:''},
		{id:14,rankstr:'Т',rank:0,suit:1,code:'ЧеТверть пиццы',image:''},
		{id:15,rankstr:'2',rank:1,suit:1,code:'ЧуДо-йогурт',image:''},
		{id:16,rankstr:'3',rank:2,suit:1,code:'ЧеХол',image:''},
		{id:17,rankstr:'4',rank:3,suit:1,code:'ЧаЧа',image:''},
		{id:18,rankstr:'5',rank:4,suit:1,code:'ЧеБурашка',image:''},
		{id:19,rankstr:'6',rank:5,suit:1,code:'ЧаШка',image:''},
		{id:20,rankstr:'7',rank:6,suit:1,code:'ЧаСы',image:''},
		{id:21,rankstr:'8',rank:7,suit:1,code:'Черный Фен',image:''},
		{id:22,rankstr:'9',rank:8,suit:1,code:'ЧеРешня',image:''},
		{id:23,rankstr:'10',rank:9,suit:1,code:'ЧуГунок',image:''},
		{id:24,rankstr:'В',rank:10,suit:1,code:'Чистая Вода',image:''},
		{id:25,rankstr:'Д',rank:11,suit:1,code:'ЧуДовище',image:''},
		{id:26,rankstr:'К',rank:12,suit:1,code:'ЧеК',image:''},
		{id:27,rankstr:'Т',rank:0,suit:2,code:'аТТестат',image:''},
		{id:28,rankstr:'2',rank:1,suit:2,code:'ТаТу',image:''},
		{id:29,rankstr:'3',rank:2,suit:2,code:'ТКань',image:''},
		{id:30,rankstr:'4',rank:3,suit:2,code:'ТаЧка',image:''},
		{id:31,rankstr:'5',rank:4,suit:2,code:'ТюБик',image:''},
		{id:32,rankstr:'6',rank:5,suit:2,code:'ТеЛефон',image:''},
		{id:33,rankstr:'7',rank:6,suit:2,code:'ТиСки',image:''},
		{id:34,rankstr:'8',rank:7,suit:2,code:'ТВикс',image:''},
		{id:35,rankstr:'9',rank:8,suit:2,code:'ТаРакан',image:''},
		{id:36,rankstr:'10',rank:9,suit:2,code:'ТяГач',image:''},
		{id:37,rankstr:'В',rank:10,suit:2,code:'ТВ',image:''},
		{id:38,rankstr:'Д',rank:11,suit:2,code:'эТюДник',image:''},
		{id:39,rankstr:'К',rank:12,suit:2,code:'уТКа',image:''},
		{id:40,rankstr:'Т',rank:0,suit:3,code:'БаТон',image:''},
		{id:41,rankstr:'2',rank:1,suit:3,code:'БоТинки',image:''},
		{id:42,rankstr:'3',rank:2,suit:3,code:'БоКал',image:''},
		{id:43,rankstr:'4',rank:3,suit:3,code:'БоЧка',image:''},
		{id:44,rankstr:'5',rank:4,suit:3,code:'БуБен',image:''},
		{id:45,rankstr:'6',rank:5,suit:3,code:'БоЛт',image:''},
		{id:46,rankstr:'7',rank:6,suit:3,code:'БуСы',image:''},
		{id:47,rankstr:'8',rank:7,suit:3,code:'БиФштекс',image:''},
		{id:48,rankstr:'9',rank:8,suit:3,code:'БуРатино',image:''},
		{id:49,rankstr:'10',rank:9,suit:3,code:'Биг-мак',image:''},
		{id:50,rankstr:'В',rank:10,suit:3,code:'БиВень',image:''},
		{id:51,rankstr:'Д',rank:11,suit:3,code:'БиДон',image:''},
		{id:52,rankstr:'К',rank:12,suit:3,code:'БуК',image:''}
	]};
    
    //‰%%%%%%%%%%%%%%%%%%%
    
    // alias for addEventListener
    EventTarget.prototype.on = EventTarget.prototype.addEventListener;

    // alias for HTMLElement methods
    HTMLElement.prototype.find = HTMLElement.prototype.querySelector;
    HTMLElement.prototype.findAll = HTMLElement.prototype.querySelectorAll;

    // alias for document
    const $d = document;

    // alias for window
    const $w = window;

    // alias for getElementById
    function ById(id) { return document.getElementById(id); }

    // alias for getElementsByClassName 
    function ByClass(cls) { return document.getElementsByClassName(cls); }

    // alias for 
    const ByTagName = $d.getElementsByTagName;

    // aliases for querySelector
    $d.find = $d.querySelector;
    $d.findAll = $d.querySelectorAll;

    let $cards = [];
    let $order = [];
    let $deck = {};

    // rank and suit by card number
    let getRank = (value) => (value-1) % 13 + 1;
    let getSuit = (value) => ((value-1) / 13 | 0) + 1;

    // suitname by suit number
    let getSuitName = (suit) => suit == 1 ? 'checkSpade' : suit == 2 ? 'checkHeart' : suit == 3 ? 'checkClub' : 'checkDiamond';

    // all checks
    const $chk = new Map([
    	['checkAll', true],
    	['checkSpade', true],
    	['checkHeart', true],
    	['checkClub', true],
    	['checkDiamond', true]
    ]);
  
    for(let i = 1; i < 14; i++) $chk.set('check' + i, true);
    for(let i = 1; i < 53; i++) $chk.set('check_card_' + i, true);

    $chk.forEach(function(value, key, map) {$d.find('#' + key).checked = value });

    let $app = {doc: $d, chk: $chk, cards: $cards, order: $order, deck: $deck};     

    // ==============================================================
    // form Checks

    let $checkAll = $d.find('#checkAll');
    $checkAll.on('click', clickAll, false);
    $checkAll.$p = $app;

    // callback for click checkAll
    function clickAll(_e) {
		let _o = _e.currentTarget.$p;
		
		let _bool = !_o.chk.get('checkAll');
		for (let pair of _o.chk) setCheck(pair[0], _bool, _o);

		_o.cards = getCards(_o);
	} 

    // click suits
    for (let _s = 1; _s < 5; _s++) {
		let suit = getSuitName(_s);

		//callback for click 
		function clickSuit(_e) {
			let _o = _e.currentTarget.$p;
			let _s = _e.currentTarget._s;

			let _bool = !_o.chk.get(suit);
			_o.chk.set(suit,_bool);
			for (let i = 1 + (13*(_s-1)); i < 14 + (13*(_s-1)); i++) setCheck('check_card_'+i,_bool,_o);
		
			setRanksRow(_o);
			setCheckAll(_o);

			_o.cards = getCards(_o);
		}

		let $checkSuit = $d.find('#' + suit);
		$checkSuit.on('click', clickSuit, false);
		$checkSuit._s = _s;
		$checkSuit.$p = $app;
	}

    // click ranks
    for (let _b = 1; _b < 14; _b++) {
		let $checkRank = $d.find('#check'+_b);

		$checkRank.on('click', clickRank, false);

		$checkRank.$p = $app;
		$checkRank._b = _b;
	}

    // callback for click check##
    function clickRank(_e) {
		let _o = _e.currentTarget.$p;
		let _b = _e.currentTarget._b;

		let _bool = !_o.chk.get('check'+_b);
		_o.chk.set('check'+_b,_bool);
		for (let i = _b; i < 53; i=i+13) setCheck('check_card_'+i,_bool,_o);
		
		setSuitsRow(_o);
		setCheckAll(_o);

		_o.cards = getCards(_o);
	}

    // checks cards
    for (let i = 1; i < 53 ; i++ ) {
		let $card = $d.find('#check_card_'+i);

		$card.on('click', clickCard, false);

		$card.$p = $app;
		$card._i = i;
	}

    function clickCard(_e) {
		let _o = _e.currentTarget.$p;
		let _i = _e.currentTarget._i;
		
		let _bool = !_o.chk.get('check_card_'+ _i);
		_o.chk.set('check_card_'+ _i,_bool);
		setSuitsNRanksRows(_i,_o);
		setCheckAll(_o);

		_o.cards = getCards(_o);
	} 

    function setSuitsNRanksRows(value,_o={}){
		let suit = getSuit(value);
		let rank = getRank(value);

		let checkSuit = getSuitName(suit);

		setCheck(checkSuit,sumChecks(_o,suit) == 13 ? true : false,_o);
		setCheck('check'+rank,sumChecks(_o,0,rank) == 4 ? true : false,_o);
	}

    function setCheckAll(_o={}) {
		setCheck('checkAll',sumChecks(_o) == 52 ? true : false,_o);
	}

    function setRanksRow(_o={}) {
		for (let i = 1; i < 14; i = i + 1) {
			(sumChecks(_o,0,i) < 4) ?
				setCheck('check'+i,false,_o) : setCheck('check'+i,true,_o); 
		}
	}

    function setSuitsRow(_o={}) {
		for (let i=1;i<5;i++) {
			let checksuit = getSuitName(i);
			(sumChecks(_o,i) < 13) ? setCheck(checksuit,false,_o) : setCheck(checksuit,true,_o);
		}
	}

    function sumChecks(_o={},suit = 0, rank = 0, value = 0) {
		let sum = 0;

		if (suit==0 && rank==0 && value == 0)  {
			for (let i = 1; i < 53; i = i + 1) {
				sum = sum + _o.chk.get('check_card_' + i);
			}
		} else if (suit > 0 && rank == 0 && value == 0) {
			for (let i = (suit - 1) * 13 + 1; i < suit * 13 + 1; i = i + 1) {
				sum = sum + _o.chk.get('check_card_' + i);
			}
		} else if (suit == 0 && rank > 0 && value == 0) {
			for (let i = rank; i < 53; i = i + 13) {
				sum = sum + _o.chk.get('check_card_' + i);
			}
		} else if (suit == 0 && rank == 0 && value > 0) {
			// дублирует первый вариант, думаю можно удалить
			for (let i = 1; i < 53; i = i + 1) {
				sum = sum + _o.chk.get('check_card_' + i);
			}
		}

		return sum;
	}

    function setCheck(key, value, _o={}) {
		_o.chk.set(key,value); _o.doc.find('#'+key).checked = value;
	}

    function getCards(_o) {
		let _arr = [];

		for (let i = 1 ; i < 53; i++) {
			if (_o.chk.get('check_card_' + i)) _arr.push(i);
		}

		console.log(_arr); // для отладки
		return _arr;
	}
    // ==============================================================


    // getStart
    $d.find('#getStart').on('click', function () {
		$d.find('#greetings').style['display'] = "none"; // "block"
		$d.find('#card').style['display'] = "block";
	});

    
    //‰%%%%%%%%%%%%%%%%%%%
    
	const prefix = Deck.prefix;

	//const transform = prefix('transform'); // используется для перемещения

	//const translate = Deck.translate; // используется для перемещения

	const $container = ById('container');

	//let arr = $app.cards;
	let deck = Deck(false,$app. cards); // сюда надо передать массив выранных карт

    $app.deck = $deck = deck;

    ///// сюда пеоенести операции с колодой
    //https://getbootstrap.com/docs/5.0/components/offcanvas/
    let endOffcanvas = ById('offcanvas_end');
    endOffcanvas.on('shown.bs.offcanvas', function () {
	
    });
    endOffcanvas.on('hidden.bs.offcanvas', function () {
	
	    try {
	    	//$app.deck.remove();
			$app.deck.unmount();	
    	} catch (error) {
		    console.log('oops');
    	}

        $app.deck = $deck = deck = Deck(false,$app. cards);
		  $app.deck.cards.forEach(function (card, i) {
			card.enableDragging();
			card.enableFlipping();
		
			card.$el.on('mousedown', onTouch);
			card.$el.on('touchstart', onTouch);
		
			function onTouch () {
				// обработчик нажатия на карту
				let card;
			}
		});
		
		$app.deck.mount($container);
	    $app.deck.shuffle();
	    $app.deck.shuffle();
	    $app.deck.flip();

	    console.log('offcanvas hidden');
    });

    let bsOffcanvas = new bootstrap.Offcanvas(endOffcanvas);

	let acesClicked = [];
	let kingsClicked = [];

	deck.cards.forEach(function (card, i) {
		card.enableDragging();
		card.enableFlipping();
	
		card.$el.on('mousedown', onTouch);
		card.$el.on('touchstart', onTouch);
	
		function onTouch () {
			// обработчик нажатия на карту
			let card;
			
			/*
			if (i % 13 === 0) {
				acesClicked[i] = true;
				if (acesClicked.filter(function (ace) {
				return ace;
				}).length === 4) {
				document.body.removeChild($topbar);
				deck.$el.style.display = 'none';
				setTimeout(function () {
					startWinning();
				}, 250)
				}
			} else if (i % 13 === 12) {
				if (!kingsClicked) {
				return;
				}
				kingsClicked[i] = true;
				if (kingsClicked.filter(function (king) {
				return king;
				}).length === 4) {
				for (var j = 0; j < 3; j++) {
					card = Deck.Card(52 + j);
					card.mount(deck.$el);
					card.$el.style[transform] = 'scale(0)';
					card.setSide('front');
					card.enableDragging();
					card.enableFlipping();
					deck.cards.push(card);
				}
				deck.sort(true);
				kingsClicked = false;
				}
			} else {
				acesClicked = [];
				if (kingsClicked) {
				kingsClicked = [];
				}
			}*/

		}

	})

	/*
	function startWinning () {
		var $winningDeck = document.createElement('div');
		$winningDeck.classList.add('deck');
	  
		$winningDeck.style[transform] = translate(Math.random() * window.innerWidth - window.innerWidth / 2 + 'px', Math.random() * window.innerHeight - window.innerHeight / 2 + 'px');
	  
		$container.appendChild($winningDeck);
	  
		var side = Math.floor(Math.random() * 2) ? 'front' : 'back';
	  
		for (var i = 0; i < 55; i++) {
		  addWinningCard($winningDeck, i, side);
		}
	  
		setTimeout(startWinning, Math.round(Math.random() * 1000));
	  }
	  
	  function addWinningCard ($deck, i, side) {
		var card = Deck.Card(54 - i);
		var delay = (55 - i) * 20;
		var animationFrames = Deck.animationFrames;
		var ease = Deck.ease;
	  
		card.enableFlipping();
	  
		if (side === 'front') {
		  card.setSide('front');
		} else {
		  card.setSide('back');
		}
	  
		card.mount($deck);
		card.$el.style.display = 'none';
	  
		var xStart = 0;
		var yStart = 0;
		var xDiff = -500;
		var yDiff = 500;
	  
		animationFrames(delay, 1000)
		  .start(function () {
			card.x = 0;
			card.y = 0;
			card.$el.style.display = '';
		  })
		  .progress(function (t) {
			var tx = t;
			var ty = ease.cubicIn(t);
			card.x = xStart + xDiff * tx;
			card.y = yStart + yDiff * ty;
			card.$el.style[transform] = translate(card.x + 'px', card.y + 'px');
		  })
		  .end(function () {
			card.unmount();
		  })
	  }
	  */
	  // easter eggs end
	  /*
	  $shuffle.addEventListener('click', function () {
		deck.shuffle();
		deck.shuffle();
	  });
	  $sort.addEventListener('click', function () {
		deck.sort();
	  });
	  $bysuit.addEventListener('click', function () {
		deck.sort(true); // sort reversed
		deck.bysuit();
	  });
	  $fan.addEventListener('click', function () {
		deck.fan();
	  })
	  $flip.addEventListener('click', function () {
		deck.flip();
	  })
	  $poker.addEventListener('click', function () {
		deck.queue(function (next) {
		  deck.cards.forEach(function (card, i) {
			setTimeout(function () {
			  card.setSide('back');
			}, i * 7.5)
		  })
		  next();
		})
		deck.shuffle();
		deck.shuffle();
		deck.poker();
	  })
	  */
	  deck.mount($container);
	  //return deck;
//}
})(deckOn);