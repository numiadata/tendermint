(window.webpackJsonp=window.webpackJsonp||[]).push([[246],{821:function(e,t,s){"use strict";s.r(t);var o=s(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"implementation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),s("h2",{attrs:{id:"blocksync-reactor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blocksync-reactor"}},[e._v("#")]),e._v(" Blocksync Reactor")]),e._v(" "),s("ul",[s("li",[e._v("coordinates the pool for syncing")]),e._v(" "),s("li",[e._v("coordinates the store for persistence")]),e._v(" "),s("li",[e._v("coordinates the playing of blocks towards the app using a sm.BlockExecutor")]),e._v(" "),s("li",[e._v("handles switching between fastsync and consensus")]),e._v(" "),s("li",[e._v("it is a p2p.BaseReactor")]),e._v(" "),s("li",[e._v("starts the pool.Start() and its poolRoutine()")]),e._v(" "),s("li",[e._v("registers all the concrete types and interfaces for serialisation")])]),e._v(" "),s("h3",{attrs:{id:"poolroutine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#poolroutine"}},[e._v("#")]),e._v(" poolRoutine")]),e._v(" "),s("ul",[s("li",[e._v("listens to these channels:\n"),s("ul",[s("li",[e._v("pool requests blocks from a specific peer by posting to requestsCh, block reactor then sends\na &bcBlockRequestMessage for a specific height")]),e._v(" "),s("li",[e._v("pool signals timeout of a specific peer by posting to timeoutsCh")]),e._v(" "),s("li",[e._v("switchToConsensusTicker to periodically try and switch to consensus")]),e._v(" "),s("li",[e._v("trySyncTicker to periodically check if we have fallen behind and then catch-up sync\n"),s("ul",[s("li",[e._v("if there aren't any new blocks available on the pool it skips syncing")])])])])]),e._v(" "),s("li",[e._v("tries to sync the app by taking downloaded blocks from the pool, gives them to the app and stores\nthem on disk")]),e._v(" "),s("li",[e._v("implements Receive which is called by the switch/peer\n"),s("ul",[s("li",[e._v("calls AddBlock on the pool when it receives a new block from a peer")])])])]),e._v(" "),s("h2",{attrs:{id:"block-pool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-pool"}},[e._v("#")]),e._v(" Block Pool")]),e._v(" "),s("ul",[s("li",[e._v("responsible for downloading blocks from peers")]),e._v(" "),s("li",[e._v("makeRequestersRoutine()\n"),s("ul",[s("li",[e._v("removes timeout peers")]),e._v(" "),s("li",[e._v("starts new requesters by calling makeNextRequester()")])])]),e._v(" "),s("li",[e._v("requestRoutine():\n"),s("ul",[s("li",[e._v("picks a peer and sends the request, then blocks until:\n"),s("ul",[s("li",[e._v("pool is stopped by listening to pool.Quit")]),e._v(" "),s("li",[e._v("requester is stopped by listening to Quit")]),e._v(" "),s("li",[e._v("request is redone")]),e._v(" "),s("li",[e._v("we receive a block\n"),s("ul",[s("li",[e._v("gotBlockCh is strange")])])])])])])])]),e._v(" "),s("h2",{attrs:{id:"go-routines-in-blocksync-reactor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go-routines-in-blocksync-reactor"}},[e._v("#")]),e._v(" Go Routines in Blocksync Reactor")]),e._v(" "),s("p",[s("img",{attrs:{src:"img/bc-reactor-routines.png",alt:"Go Routines Diagram"}})])])}),[],!1,null,null,null);t.default=i.exports}}]);