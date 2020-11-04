(this["webpackJsonppetful-client"]=this["webpackJsonppetful-client"]||[]).push([[0],{21:function(e,t,n){e.exports=n.p+"static/media/dogscats.1e6d2e1b.jpg"},22:function(e,t,n){e.exports=n(37)},23:function(e,t,n){},28:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);n(23);var a=n(10),o=n(0),r=n.n(o),l=n(19),c=n.n(l),i=n(6),s=n(7),u=n(9),p=n(8),d=n(1);n(28);function m(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(a.b,{to:"/"},r.a.createElement("h1",null,"FIFO Adoption Agency"))))}n(34);var h=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderPeople",value:function(){return this.props.people.map((function(e,t){return r.a.createElement("li",{key:t},e)}))}},{key:"render",value:function(){return this.props.people.length>0?r.a.createElement("section",null,r.a.createElement("h2",null,"Adoption Line"),r.a.createElement("div",null,this.renderPeople())):r.a.createElement(r.a.Fragment,null)}}]),n}(o.Component),f=n(13),E=(n(35),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).adoptDog=a.handleAdoptDog.bind(Object(f.a)(a)),a.adoptCat=a.handleAdoptCat.bind(Object(f.a)(a)),a}return Object(s.a)(n,[{key:"handleAdoptDog",value:function(){this.props.adoptDog(),this.setState({confirm:!1,added:!1})}},{key:"handleAdoptCat",value:function(){this.props.adoptCat(),this.setState({confirm:!1,added:!1})}},{key:"render",value:function(){var e=this,t=this.props.dogs,n=this.props.cats,a=this.props.currentPerson,o=this.props.error,l=this.props.nextInLine;return n?r.a.createElement("div",{className:"adopt"},r.a.createElement("div",{className:"centerImage"},r.a.createElement("img",{src:n.imageURL,alt:n.imageDescription})),l===a&&r.a.createElement("button",{onClick:function(){return e.handleAdoptCat()}},"Adopt Me!"),r.a.createElement("p",null," Name: ",n.name),r.a.createElement("p",null," Age: ",n.age),r.a.createElement("p",null," Description: ",n.description),r.a.createElement("p",null," Sex: ",n.gender),r.a.createElement("p",null," Breed: ",n.breed),r.a.createElement("p",null," Story: ",n.story)):t?r.a.createElement("div",{className:"adopt"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"centerImage"},r.a.createElement("img",{src:t.imageURL,alt:t.imageDescription})),l===a&&r.a.createElement("button",{onClick:function(){return e.handleAdoptDog()}},"Adopt Me!"),r.a.createElement("p",null," Name: ",t.name),r.a.createElement("p",null," Age: ",t.age),r.a.createElement("p",null," Description: ",t.description),r.a.createElement("p",null," Sex: ",t.gender),r.a.createElement("p",null," Breed: ",t.breed),r.a.createElement("p",null," Story: ",t.story)):r.a.createElement("h1",null,"No dogs to adopt")):r.a.createElement("div",null,o&&r.a.createElement("h2",null,"Sorry, all pets have been adopted, please come back later!"))}}]),n}(o.Component)),g={REACT_APP_API_BASE:"https://sheltered-sea-97071.herokuapp.com/api"},v={getPets:function(){return fetch("".concat(g.API_ENDPOINT,"/pets"),{headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"X-Requested-With"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},deletePets:function(e){return fetch("".concat(g.API_ENDPOINT,"/pets"),{method:"DELETE",headers:{"content-type":"application/json"},body:JSON.stringify({type:e})}).then((function(e){return e.ok?Promise.resolve(""):e.json().then((function(e){return Promise.reject(e)}))}))}},b={getPeople:function(){return fetch("".concat(g.API_ENDPOINT,"/people")).then((function(e){return e.ok?e.json():e.json().then((function(e){return Promise.reject(e)}))}))},postPeople:function(e){var t={name:e};return fetch("".concat(g.API_ENDPOINT,"/people"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.ok?Promise.resolve(""):e.json().then((function(e){return Promise.reject(e)}))}))},deletePeople:function(){return fetch("".concat(g.API_ENDPOINT,"/people"),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.ok?Promise.resolve(""):e.json().then((function(e){return Promise.reject(e)}))}))}},P=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={cats:[],dogs:[],people:[],confirm:!1,currentPerson:"",nextInLine:"",added:!1,error:{}},e.adoptCat=function(){v.deletePets("cat");var t=e.state.people,n=e.state.cats;n.shift(),t.shift(),e.setState({people:t,cats:n,confirm:!0,nextInLine:t[0],currentUser:"",added:!1})},e.adoptDog=function(){v.deletePets("dog");var t=e.state.people,n=e.state.dogs;n.shift(),t.shift(),e.setState({people:t,dogs:n,confirm:!0,nextInLine:t[0],currentUser:"",added:!1})},e.handleAddPerson=function(t){t.preventDefault();var n=t.target.name;if(""===n.value)return alert("Name must be valid"),null;var a=e.state.people;b.postPeople(n.value).then((function(){a.push(n.value),e.setState({people:a,currentPerson:n.value,added:!0})}))},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.getPets().then((function(t){e.setState({cats:t.cats,dogs:t.dogs})})).catch((function(t){return e.setState({error:t.message})})),b.getPeople().then((function(t){e.setState({people:t,nextInLine:t[0]})})),setInterval((function(){e.handleDemo()}),5e3)}},{key:"handleDemo",value:function(){var e=this,t=this.state.people,n=this.state.cats,a=this.state.dogs,o=this.state.currentPerson,r=this.state.nextInLine;if(0===t.length&&clearInterval(this.intervalId),r===o){if(t.length<5){var l=["Cheddar Bob","Billy Bob","Bobcat Goldthwait","Uncle Bob","What about Bob"],c=Math.floor(5*Math.random());b.postPeople(l[c]).then((function(){t.push(l[c]),e.setState({people:t})}))}}else if(r!==o&&!0===this.state.added){var i=t.length%2===0?"cats":"dogs";v.deletePets(i),b.deletePeople().then((function(){"cats"===i&&n.shift(),"dogs"===i&&a.shift(),t.shift(),e.setState({people:t,cats:n,dogs:a,nextInLine:t[0]})}))}}},{key:"render",value:function(){var e=this.state,t=e.cats,n=e.dogs,a=e.nextInLine,o=e.people,l=e.error,c=e.currentPerson;return t?r.a.createElement("div",{className:"mainContainer"},r.a.createElement("ol",null,r.a.createElement(h,{people:o})),!this.state.added&&r.a.createElement("form",{className:"nameForm",onSubmit:this.handleAddPerson},r.a.createElement("label",{htmlFor:"adoptForm"},"Name"),r.a.createElement("input",{name:"name",type:"text"}),r.a.createElement("button",{type:"submit"},"Get In Line")),r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("h2",null,"Dogs"),n.length>0?r.a.createElement(E,{dogs:n[0],adoptDog:this.adoptDog,error:l,currentPerson:c,nextInLine:a}):r.a.createElement("h2",null,"No dogs to adopt")),r.a.createElement("section",null,r.a.createElement("h2",null,"Cats"),t.length>0?r.a.createElement(E,{cats:t[0],adoptCat:this.adoptCat,error:l,currentPerson:c,nextInLine:a}):r.a.createElement("h2",null,"No cats to adopt")))):r.a.createElement("div",null)}}]),n}(o.Component),y=n(21),j=n.n(y),O=(n(36),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"centerimage"},r.a.createElement("img",{className:"landingpageImage",src:j.a,alt:"dogs and cats cartoon"})),r.a.createElement("div",{className:"landingpageBody"},r.a.createElement("p",null,"Welcome to FIFO Animal shelter! Our beautiful, loving animals have been waiting for a beautiful soul like you to come bring them into a loving home and spoil the for the rest of their days."),r.a.createElement("p",null,"Our adoption process is pretty simple. Click on the adopt button to check out the next dog and cat waiting to be adopted. When you're ready, jump in line and when you're next, you can adopt either the next cat or dog available.")),r.a.createElement("div",{className:"button"},r.a.createElement(a.b,{to:"/adoption-page"},r.a.createElement("button",null,"Adopt Now!"))))}}]),n}(o.Component)),A=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement("main",null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/adoption-page",component:P}),r.a.createElement(d.a,{path:"/",component:O}))))}}]),n}(o.Component);c.a.render(r.a.createElement(a.a,null,r.a.createElement(A,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.dfd10ff8.chunk.js.map