(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/sdot.jpg",clicked:!1},{id:2,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/iggy.jpg",clicked:!1},{id:3,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/klay.jpg",clicked:!1},{id:4,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/looney.jpg",clicked:!1},{id:5,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/kd.jpg",clicked:!1},{id:6,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/draymond.jpg",clicked:!1},{id:7,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/jerebko.jpg",clicked:!1},{id:8,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/cook.jpg",clicked:!1},{id:9,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/curry.jpg",clicked:!1},{id:10,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/bogut.jpg",clicked:!1},{id:11,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/boogie.jpg",clicked:!1},{id:12,image:"http://www.cliftonnoble.com/wp-content/uploads/2019/05/bd.jpg",clicked:!1}]},,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(4),l=n.n(o),r=(n(16),n(5)),i=n(6),d=n(8),u=n(7),s=n(9),m=(n(17),function(e){return a.a.createElement("nav",null,a.a.createElement("ul",null,a.a.createElement("li",{className:"brand animated lightSpeedIn"},a.a.createElement("a",{href:"/clicky-game."},e.title)),a.a.createElement("li",{id:"rw"},e.rightWrong),a.a.createElement("li",{id:"cur-sco"},"Current Score: ",e.score),a.a.createElement("li",{id:"top-sco"},"Top Score: ",e.topScore)))}),p=(n(18),function(e){return a.a.createElement("div",{className:"wrapper"},e.children)}),h=function(e){return a.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)},f=function(e){return a.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)},w=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return a.a.createElement("div",{className:t},e.children)},g=(n(19),function(e){return a.a.createElement("div",{className:"card",value:e.id,onClick:function(){return e.handleClick(e.id)}},a.a.createElement("div",{className:"img-container"},a.a.createElement("img",{alt:e.name,src:e.image})))}),k=n(1),S=(n(20),function(e){return a.a.createElement("h1",{className:"title"},e.children)}),b=n(2),E=n.n(b);n(21);var j=function(e){function t(){var e,n;Object(r.a)(this,t);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={warriors:k,currentScore:0,topScore:0,rightWrong:"",clicked:[]},n.handleClick=function(e){-1===n.state.clicked.indexOf(e)?(n.handleIncrement(),n.setState({clicked:n.state.clicked.concat(e)})):(E.a.fire("Oops...","You already selected that Guy!","error"),n.handleReset())},n.handleIncrement=function(){var e=n.state.currentScore+1;n.setState({currentScore:e,rightWrong:""}),e>=n.state.topScore&&n.setState({topScore:e}),12===e&&(n.setState({rightWrong:"DUBS WIN!!!"}),E.a.fire("DUBS WIN!!","You guessed them All","Success")),n.handleShuffle()},n.handleReset=function(){n.setState({currentScore:0,topScore:n.state.topScore,rightWrong:"Air Ball!!",clicked:[]}),n.handleShuffle()},n.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),c=[e[n],e[t]];e[t]=c[0],e[n]=c[1]}return e}(k);n.setState({friends:e})},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(p,null,a.a.createElement(m,{title:"Warriors Memory Game",score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),a.a.createElement(S,null,"Click on each Warrior member, but don't hit a duplicate or you lose the game."),a.a.createElement(f,null,a.a.createElement(h,null,this.state.warriors.map(function(t){return a.a.createElement(w,{size:"md-3 sm-6"},a.a.createElement(g,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image}))}))))}}]),t}(c.Component);l.a.render(a.a.createElement(j,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7f471792.chunk.js.map