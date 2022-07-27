(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{841:function(e,t,n){"use strict";n.r(t);var s=n(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"debug-like-a-pro"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#debug-like-a-pro"}},[e._v("#")]),e._v(" Debug Like A Pro")]),e._v(" "),n("h2",{attrs:{id:"intro"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#intro"}},[e._v("#")]),e._v(" Intro")]),e._v(" "),n("p",[e._v("Tendermint Core is a fairly robust BFT replication engine. Unfortunately, as with other software, failures sometimes do happen. The question is then “what do you do” when the system deviates from the expected behavior.")]),e._v(" "),n("p",[e._v("The first response is usually to take a look at the logs. By default, Tendermint writes logs to standard output ¹.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"SVsyMDIwLTA1LTI5fDAzOjAzOjE2LjE0NV0gQ29tbWl0dGVkIHN0YXRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPXN0YXRlIGhlaWdodD0yMjgyIHR4cz0wIGFwcEhhc2g9MEEyN0JDNkIwNDc3QThBNTA0MzE3MDREMkZCOTBEQjk5Q0JGQ0I2N0EyOTI0QjVGQkY2RDRFNzg1MzhCNjdDMUlbMjAyMC0wNS0yOXwwMzowMzoyMS42OTBdIEV4ZWN1dGVkIGJsb2NrICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9MjI4MyB2YWxpZFR4cz0wIGludmFsaWRUeHM9MElbMjAyMC0wNS0yOXwwMzowMzoyMS42OThdIENvbW1pdHRlZCBzdGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9MjI4MyB0eHM9MCBhcHBIYXNoPUVCNEU0MDlEM0FGNDA5NUEwNzU3QzgwNkJGMTYwQjNERTQwNDdBQzA0MTZGNTg0QkZGNzhGQzBENDRDNDRCRjNJWzIwMjAtMDUtMjl8MDM6MDM6MjcuOTk0XSBFeGVjdXRlZCBibG9jayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9c3RhdGUgaGVpZ2h0PTIyODQgdmFsaWRUeHM9MCBpbnZhbGlkVHhzPTBJWzIwMjAtMDUtMjl8MDM6MDM6MjguMDAzXSBDb21taXR0ZWQgc3RhdGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9c3RhdGUgaGVpZ2h0PTIyODQgdHhzPTAgYXBwSGFzaD0zRkM5MjM3NzE4MjQzQTJDQUVFM0E4QjAzQUUwNUUxRkMzQ0EyOEFFRkU4REYwRDNEM0RDRTAwRDg3NDYyODY2RVsyMDIwLTA1LTI5fDAzOjAzOjMyLjk3NV0gZW50ZXJQcmV2b3RlOiBQcm9wb3NhbEJsb2NrIGlzIGludmFsaWQgICAgICAgbW9kdWxlPWNvbnNlbnN1cyBoZWlnaHQ9MjI4NSByb3VuZD0wIGVycj0mcXVvdDt3cm9uZyBzaWduYXR1cmUgKCMzNSk6IEM2ODMzNDEwMDAzODRFQTAwQTM0NUY5REI5NjA4MjkyRjY1RUU4M0I1MTc1MkMwQTM3NUE5RkNGQzJCRDg5NUUwNzkyQTA3Mjc5MjU4NDVEQzEzQkEwRTIwOEMzOEI3QjEyQjIyMThCMkZFMjlCNkQ5MTM1QzUzRDdGMjUzRDA1JnF1b3Q7Cg=="}}),e._v(" "),n("p",[e._v("If you’re running a validator in production, it might be a good idea to forward the logs for analysis using filebeat or similar tools. Also, you can set up a notification in case of any errors.")]),e._v(" "),n("p",[e._v("The logs should give you the basic idea of what has happened. In the worst-case scenario, the node has stalled and does not produce any logs (or simply panicked).")]),e._v(" "),n("p",[e._v("The next step is to call /status, /net_info, /consensus_state and /dump_consensus_state RPC endpoints.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Y3VybCBodHRwOi8vJmx0O3NlcnZlciZndDs6MjY2NTcvc3RhdHVzJCBjdXJsIGh0dHA6Ly8mbHQ7c2VydmVyJmd0OzoyNjY1Ny9uZXRfaW5mbyQgY3VybCBodHRwOi8vJmx0O3NlcnZlciZndDs6MjY2NTcvY29uc2Vuc3VzX3N0YXRlJCBjdXJsIGh0dHA6Ly8mbHQ7c2VydmVyJmd0OzoyNjY1Ny9kdW1wX2NvbnNlbnN1c19zdGF0ZQo="}}),e._v(" "),n("p",[e._v("Please note that /consensus_state and /dump_consensus_state may not return a result if the node has stalled (since they try to get a hold of the consensus mutex).")]),e._v(" "),n("p",[e._v("The output of these endpoints contains all the information needed for developers to understand the state of the node. It will give you an idea if the node is lagging behind the network, how many peers it’s connected to, and what the latest consensus state is.")]),e._v(" "),n("p",[e._v("At this point, if the node is stalled and you want to restart it, the best thing you can do is to kill it with -6 signal:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"a2lsbCAtNiAmbHQ7UElEJmd0Owo="}}),e._v(" "),n("p",[e._v("which will dump the list of the currently running goroutines. The list is super useful when debugging a deadlock.")]),e._v(" "),n("p",[n("code",[e._v("PID")]),e._v(" is the Tendermint’s process ID. You can find it out by running "),n("code",[e._v("ps -a | grep tendermint | awk ‘{print $1}’")])]),e._v(" "),n("h2",{attrs:{id:"tendermint-debug-kill"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-debug-kill"}},[e._v("#")]),e._v(" Tendermint debug kill")]),e._v(" "),n("p",[e._v("To ease the burden of collecting different pieces of data Tendermint Core (since v0.33 version) provides the Tendermint debug kill tool, which will do all of the above steps for you, wrapping everything into a nice archive file.")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBkZWJ1ZyBraWxsICZsdDtwaWQmZ3Q7ICZsdDsvcGF0aC90by9vdXQuemlwJmd0OyDigJQgaG9tZT0mbHQ7L3BhdGgvdG8vYXBwLmQmZ3Q7Cg=="}}),e._v(" "),n("p",[e._v("Here’s the official documentation page — "),n("a",{attrs:{href:"https://docs.tendermint.com/master/tools/debugging",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.tendermint.com/master/tools/debugging"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("If you’re using a process supervisor, like systemd, it will restart the Tendermint automatically. We strongly advise you to have one in production. If not, you will need to restart the node by hand.")]),e._v(" "),n("p",[e._v("Another advantage of using Tendermint debug is that the same archive file can be given to Tendermint Core developers, in cases where you think there’s a software issue.")]),e._v(" "),n("h2",{attrs:{id:"tendermint-debug-dump"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-debug-dump"}},[e._v("#")]),e._v(" Tendermint debug dump")]),e._v(" "),n("p",[e._v("Okay, but what if the node has not stalled, but its state is degrading over time? Tendermint debug dump to the rescue!")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"dGVuZGVybWludCBkZWJ1ZyBkdW1wICZsdDsvcGF0aC90by9vdXQmZ3Q7IOKAlCBob21lPSZsdDsvcGF0aC90by9hcHAuZCZndDsK"}}),e._v(" "),n("p",[e._v("It won’t kill the node, but it will gather all of the above data and package it into an archive file. Plus, it will also make a heap dump, which should help if Tendermint is leaking memory.")]),e._v(" "),n("p",[e._v("At this point, depending on how severe the degradation is, you may want to restart the process.")]),e._v(" "),n("h2",{attrs:{id:"tendermint-inspect"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-inspect"}},[e._v("#")]),e._v(" Tendermint Inspect")]),e._v(" "),n("p",[e._v("What if the Tendermint node will not start up due to inconsistent consensus state?")]),e._v(" "),n("p",[e._v("When a node running the Tendermint consensus engine detects an inconsistent state\nit will crash the entire Tendermint process.\nThe Tendermint consensus engine cannot be run in this inconsistent state and the so node\nwill fail to start up as a result.\nThe Tendermint RPC server can provide valuable information for debugging in this situation.\nThe Tendermint "),n("code",[e._v("inspect")]),e._v(" command will run a subset of the Tendermint RPC server\nthat is useful for debugging inconsistent state.")]),e._v(" "),n("h3",{attrs:{id:"running-inspect"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#running-inspect"}},[e._v("#")]),e._v(" Running inspect")]),e._v(" "),n("p",[e._v("Start up the "),n("code",[e._v("inspect")]),e._v(" tool on the machine where Tendermint crashed using:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"dGVuZGVybWludCBpbnNwZWN0IC0taG9tZT0mbHQ7L3BhdGgvdG8vYXBwLmQmZ3Q7Cg=="}}),e._v(" "),n("p",[n("code",[e._v("inspect")]),e._v(" will use the data directory specified in your Tendermint configuration file.\n"),n("code",[e._v("inspect")]),e._v(" will also run the RPC server at the address specified in your Tendermint configuration file.")]),e._v(" "),n("h3",{attrs:{id:"using-inspect"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-inspect"}},[e._v("#")]),e._v(" Using inspect")]),e._v(" "),n("p",[e._v("With the "),n("code",[e._v("inspect")]),e._v(" server running, you can access RPC endpoints that are critically important\nfor debugging.\nCalling the "),n("code",[e._v("/status")]),e._v(", "),n("code",[e._v("/consensus_state")]),e._v(" and "),n("code",[e._v("/dump_consensus_state")]),e._v(" RPC endpoint\nwill return useful information about the Tendermint consensus state.")]),e._v(" "),n("h2",{attrs:{id:"outro"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#outro"}},[e._v("#")]),e._v(" Outro")]),e._v(" "),n("p",[e._v("We’re hoping that these Tendermint tools will become de facto the first response for any accidents.")]),e._v(" "),n("p",[e._v("Let us know what your experience has been so far! Have you had a chance to try "),n("code",[e._v("tendermint debug")]),e._v(" or "),n("code",[e._v("tendermint inspect")]),e._v(" yet?")]),e._v(" "),n("p",[e._v("Join our "),n("a",{attrs:{href:"https://discord.gg/cosmosnetwork",target:"_blank",rel:"noopener noreferrer"}},[e._v("discord chat"),n("OutboundLink")],1),e._v(", where we discuss the current issues and future improvements.")]),e._v(" "),n("p",[e._v("—")]),e._v(" "),n("p",[e._v("[1]: Of course, you’re free to redirect the Tendermint’s output to a file or forward it to another server.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);