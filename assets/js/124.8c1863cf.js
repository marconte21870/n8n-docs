(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{491:function(t,n,a){"use strict";a.r(n);var e=a(26),s=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"quickstart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart"}},[t._v("#")]),t._v(" Quickstart")]),t._v(" "),a("h2",{attrs:{id:"give-n8n-a-spin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#give-n8n-a-spin"}},[t._v("#")]),t._v(" Give n8n a spin")]),t._v(" "),a("p",[t._v("To spin up n8n, you can run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("npx n8n\n")])])]),a("p",[t._v("It will download everything that is needed to start n8n.")]),t._v(" "),a("p",[t._v("You can then access n8n by opening:\n"),a("a",{attrs:{href:"http://localhost:5678",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:5678"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"run-with-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-with-docker"}},[t._v("#")]),t._v(" Run with docker")]),t._v(" "),a("p",[t._v("To play around with n8n, you can also start it using docker:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --name n8n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v(":5678 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  n8nio/n8n\n")])])]),a("p",[t._v("Be aware that all the data will be lost once the docker container gets removed. To\npersist the data mount the "),a("code",[t._v("~/.n8n")]),t._v(" folder:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("docker run -it --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  --name n8n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5678")]),t._v(":5678 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -v ~/.n8n:/root/.n8n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  n8nio/n8n\n")])])]),a("p",[t._v("More information about the Docker setup can be found in the README file of the\n"),a("a",{attrs:{href:"https://github.com/n8n-io/n8n/blob/master/docker/images/n8n/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Image"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("In case you run into issues, check out the "),a("RouterLink",{attrs:{to:"/reference/troubleshooting.html"}},[t._v("troubleshooting")]),t._v(" page or ask for help in the community "),a("a",{attrs:{href:"https://community.n8n.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("forum"),a("OutboundLink")],1),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"install-with-npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-with-npm"}},[t._v("#")]),t._v(" Install with npm")]),t._v(" "),a("p",[t._v("To install n8n globally:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" n8n -g\n")])])]),a("h3",{attrs:{id:"start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[t._v("#")]),t._v(" Start")]),t._v(" "),a("p",[t._v("After the installation n8n can be started by typing in:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("n8n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\nn8n start\n")])])]),a("h3",{attrs:{id:"start-with-tunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-with-tunnel"}},[t._v("#")]),t._v(" Start with tunnel")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("This is only meant for local development and testing. It should not be used in production!")])]),t._v(" "),a("p",[t._v("To be able to use webhooks for trigger nodes of external services like GitHub, n8n has to be reachable from the web. To make that easy, n8n has a special tunnel service, which redirects requests from our servers to your local n8n instance (uses this code: "),a("a",{attrs:{href:"https://github.com/localtunnel/localtunnel",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/localtunnel/localtunnel"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("p",[t._v("To use it, start n8n with "),a("code",[t._v("--tunnel")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("n8n start --tunnel\n")])])]),a("p",[t._v("In case you run into issues, check out the "),a("RouterLink",{attrs:{to:"/reference/troubleshooting.html"}},[t._v("troubleshooting")]),t._v(" page or ask for help in the community "),a("a",{attrs:{href:"https://community.n8n.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("forum"),a("OutboundLink")],1),t._v(".")],1)])}),[],!1,null,null,null);n.default=s.exports}}]);