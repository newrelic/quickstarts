(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{283:function(e,t,a){},284:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(25),c=a.n(s),o=a(9),l=a(10),i=a(11),u=a(12),m=a(20),d=a(8),h=a(13),p=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;Object(o.a)(this,a),r=t.call(this,e);var n="";switch(e.source){case"Transaction":n="APM";break;case"SystemSample":n="Infrastructure";break;case"ProcessSample":n="Infrastructure - Processes";break;case"BrowserInteraction":n="Browser - Interactions";break;case"JavaScriptError":n="Browser - Javascript";break;case"PageViewTiming":n="Browser - Pageview timing";break;case"PageView":n="Browser - Pageviews";break;case"SyntheticCheck":n="Synthetics";break;default:n="object"===typeof e.source&&null!==e.source?e.source.name:e.source}return r.state={name:n},r}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("span",{className:"badge badge-dark"},this.state.name)}}]),a}(n.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"sources"},this.props.sources.map((function(e,t){return n.a.createElement(p,{key:e,source:e})})))}}]),a}(n.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={screenshot:r.props.quickstart.dashboards[Math.floor(Math.random()*r.props.quickstart.dashboards.length)].screenshots[0]},r}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-md-4 col-lg-3 col-sm-4"},n.a.createElement("div",{className:"card mb-4 shadow-sm"},n.a.createElement("img",{src:"./data/"+this.props.quickstart.id+"/dashboards/"+this.state.screenshot,className:"card-img-top",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},n.a.createElement(m.Link,{className:"",to:"/view/"+this.props.quickstart.id},this.props.quickstart.name,this.props.quickstart.authors.length>0&&n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted text-small"}," created by ",this.props.quickstart.authors.join(", "))))),n.a.createElement(b,{sources:this.props.quickstart.sources}),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center pt-3"}))))}}]),a}(n.a.Component),v=a(43),E=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={search:""},r.setSearch=r.setSearch.bind(Object(h.a)(r)),r.search=r.search.bind(Object(h.a)(r)),r}return Object(l.a)(a,[{key:"setSearch",value:function(e,t){this.setState({search:e.target.value})}},{key:"search",value:function(e){var t=this.state.search.toLowerCase();return!!e.name.toLowerCase().includes(t)||!!e.sources.toString().toLowerCase().includes(t)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("section",{className:"jumbotron text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"New Relic - Quick start library"),n.a.createElement("p",{className:"lead text-muted"},"Library of curated dashboards & alerts with their dependencies.")),n.a.createElement("div",{className:"container",id:"root"},n.a.createElement("div",{className:"row pt-5"},n.a.createElement("input",{type:"text",className:"form-control",id:"search","aria-describedby":"search",placeholder:"Search for specific datasource or technology",value:this.state.search,onChange:this.setSearch})))),n.a.createElement("div",{className:"album bg-light"},n.a.createElement("div",{className:"container-fluid",id:"root"},n.a.createElement("div",{className:"row py-3"},v.quickstarts.filter(this.search).map((function(e,t){return n.a.createElement(f,{key:e.name,quickstart:e})}))))))}}]),a}(n.a.Component),g=a(295),y=a(291),w=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).copyToClipboard=r.copyToClipboard.bind(Object(h.a)(r)),r.state={output:a.generate(e.json)},r}return Object(l.a)(a,[{key:"copyToClipboard",value:function(){var e=this;navigator.permissions.query({name:"clipboard-write"}).then((function(t){"granted"!==t.state&&"prompt"!==t.state||navigator.clipboard.writeText(e.state.output).then((function(){alert("Terraform template copied to clipboard")}),(function(e){console.log("error",e),alert("Failed to copy terraform template to clipboard")}))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"terraform"},n.a.createElement("div",{className:"col-12 text-right"},n.a.createElement("button",{className:"btn btn-sm btn-outline-info",onClick:this.copyToClipboard},"Copy to clipboard")),n.a.createElement("div",{className:"col-12"},n.a.createElement(g.a,{language:"ruby",style:y.a},this.state.output)))}}],[{key:"removeNewlines",value:function(e){return e.replace(/(\r\n|\n|\r)/gm,"")}},{key:"generate",value:function(e){var t=[];try{t.push('data "newrelic_application" "my_application" {'),t.push('  name = "My Application"'),t.push("}"),t.push(""),t.push('resource "newrelic_dashboard" "exampledash" {'),t.push('  title = "'+e.title+'"'),e.icon&&t.push('  icon = "'+e.icon+'"'),e.visibility&&t.push('  visibility = "'+e.visibility+'"'),e.editable&&t.push('  editable = "'+e.editable+'"'),t.push(""),t.push("  filter {"),t.push("    event_types = ["),t.push(e.filter.event_types.map((function(e){return'        "'+e+'"'})).join(", \n")),t.push("    ]"),e.filter.attributes&&(t.push("    attributes = ["),t.push(e.filter.attributes.map((function(e){return'        "'+e+'"'})).join(", \n")),t.push("    ]")),t.push("  }"),t.push(""),(t=t.concat(e.widgets.map((function(e){var t=[];return t.push("  widget {"),t.push('    title = "'+e.title+'"'),t.push('    visualization = "'+e.process_as+'"'),t.push("    row = "+e.row),t.push("    column = "+e.column),e.width&&t.push("    width = "+e.width),e.height&&t.push("    height = "+e.height),e.notes&&t.push('    notes = "'+e.notes+'"'),e.nrql&&t.push('    nrql = "'+a.removeNewlines(e.nrql)+'"'),e.threshold_red&&t.push('    threshold_red = "'+e.threshold_red+'"'),e.threshold_yellow&&t.push('    threshold_yellow = "'+e.threshold_yellow+'"'),t.push("  }"),t.push(""),t.join("\n")})))).push("}")}catch(r){(t=[]).push("Error while building the Terraform template"),t.push("Please check your json input or create a bug report")}return t.join("\n")}},{key:"getDerivedStateFromProps",value:function(e,t){return t.json!==e.json?{output:a.generate(e.json)}:null}}]),a}(n.a.Component),k=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;Object(o.a)(this,a);var n=(r=t.call(this,e)).props.sources.sort().map((function(e,t){if("object"===typeof e&&null!==e)return e;switch(e){case"ComputeSample":return{name:"New Relic Amazon EC2 monitoring integration",url:"https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-ec2-monitoring-integration"};case"SystemSample":case"ProcessSample":return{name:"New Relic Infrastructure",url:"https://docs.newrelic.com/docs/infrastructure/install-configure-manage-infrastructure"};case"PageView":case"BrowserInteraction":case"JavaScriptError":case"PageViewTiming":return{name:"New Relic Browser",url:"https://docs.newrelic.com/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent"};case"SyntheticRequest":case"SyntheticCheck":return{name:"New Relic Synthetics",url:"https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics"};case"Transaction":return{name:"New Relic APM",url:"https://docs.newrelic.com/docs/apm"};case"Kubernetes":return{name:"New Relic Kubernetes",url:"https://docs.newrelic.com/docs/integrations/kubernetes-integration/get-started/introduction-kubernetes-integration"};case"Prometheus":return{name:"New Relic Prometheus Integration",url:"https://docs.newrelic.com/docs/integrations/prometheus-integrations/install-configure/install-update-or-uninstall-your-prometheus-openmetrics-integration"};case"Log":return{name:"New Relic Logs",url:"https://docs.newrelic.com/docs/logs"};case"Flex":return{name:"New Relic Flex",url:"https://docs.newrelic.com/docs/integrations/host-integrations/host-integrations-list/flex-integration-tool-build-your-own-integration"};case"Metric":return{};default:return{name:"Unknown source: "+e}}})).sort().filter((function(e,t,a){return!!e.name&&(!t||e.name!==a[t-1].name)}));return r.state={requirements:n},r}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("ul",null,this.state.requirements.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e,t){return e.url?n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url,target:"_BLANK",rel:"noopener noreferrer"},e.name)):n.a.createElement("li",{key:e.name},e.name)}))))}}]),a}(n.a.Component),N=a(32),j=a(293),S=a(69),C=a(28),O=a(31),x=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).modalCallback=void 0,r.state=a.getState(e),r.copy=r.copy.bind(Object(h.a)(r)),r.setAccountId=r.setAccountId.bind(Object(h.a)(r)),r.submitModal=r.submitModal.bind(Object(h.a)(r)),r.closeModal=r.closeModal.bind(Object(h.a)(r)),r.showTerraform=r.showTerraform.bind(Object(h.a)(r)),r}return Object(l.a)(a,[{key:"getAccountId",value:function(e){this.modalCallback=e,this.setState({accountModalVisible:!0})}},{key:"submitModal",value:function(){this.setState({accountModalVisible:!1}),this.modalCallback&&this.modalCallback()}},{key:"closeModal",value:function(){this.setState({accountModalVisible:!1,terraformModalVisible:!1})}},{key:"setAccountId",value:function(e){this.setState({accountId:e.target.value})}},{key:"getDashboard",value:function(e,t){var a=this;this.getAccountId((function(){a.getFile(e).then((function(e){e.dashboard_account_id=+a.state.accountId,t(JSON.stringify(e))}))}))}},{key:"getFile",value:function(e){return fetch("./data/"+e).then((function(e){return e.json()}))}},{key:"copy",value:function(e){this.getDashboard(e,(function(e){navigator.permissions.query({name:"clipboard-write"}).then((function(t){"granted"!==t.state&&"prompt"!==t.state||navigator.clipboard.writeText(e).then((function(){alert("Dashboard copied to clipboard")}),(function(e){console.log("error",e),alert("Failed to copy dashboard to clipboard")}))}))}))}},{key:"showTerraform",value:function(e){var t=this;console.log(e),this.getFile(e).then((function(e){t.setState({terraformModalVisible:!0,dashboardJson:e})}))}},{key:"render",value:function(){var e=this;return this.state.quickstart?n.a.createElement("div",{className:"album py-2"},n.a.createElement("div",{className:"container",id:"root"},n.a.createElement("div",{className:"row py-4"},n.a.createElement("div",{className:"col-8"},n.a.createElement("h2",null,this.state.quickstart.name)),n.a.createElement("div",{className:"col-4 text-right"},n.a.createElement(m.Link,{className:"btn btn-default",to:"/"},n.a.createElement(C.a,{icon:O.c})," Back to homepage"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Description"),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-8"},n.a.createElement("h5",null,"Installation instructions"),n.a.createElement("p",null,"This dashboard requires the following New Relic products:"),n.a.createElement(k,{sources:this.state.quickstart.sources}),this.state.quickstart.flex.length>0&&n.a.createElement("div",null,n.a.createElement("h5",null,"Flex configuration files"),n.a.createElement("ul",null,this.state.quickstart.flex.map((function(t){return n.a.createElement("li",null,n.a.createElement("a",{href:"./data/"+e.state.quickstart.id+"/flex/"+t,target:"_BLANK",rel:"noopener noreferrer"},t))})))),n.a.createElement("p",null,n.a.createElement("b",null,"Data sources: ",n.a.createElement(b,{sources:this.state.quickstart.sources}))),this.state.quickstart.authors.length>0&&n.a.createElement("p",null,n.a.createElement("b",null,"Created by:")," ",this.state.quickstart.authors.join(", "))),n.a.createElement("div",{className:"col-4 text-right"},n.a.createElement("a",{className:"btn btn-danger",href:"https://github.com/newrelic-experimental/quickstarts/issues/new?labels=bug&title=Problem%20with%20"+this.state.quickstart.id},n.a.createElement(C.a,{icon:O.a})," Report a problem"))))))),n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Dashboards"),n.a.createElement("div",{className:"card-body"},this.state.quickstart.dashboards.map((function(t){return n.a.createElement("div",{key:t.filename,className:"row px-4 py-4"},n.a.createElement("div",{className:"col-8 py-1"},n.a.createElement("h3",null,t.name)),n.a.createElement("div",{className:"col-4 text-right"},n.a.createElement(N.a,null,n.a.createElement(N.a.Toggle,{variant:"default",id:"dropdown-basic"},n.a.createElement(C.a,{icon:O.b})," Import dashboard"),n.a.createElement(N.a.Menu,null,n.a.createElement(N.a.Item,{onClick:function(a){e.copy("./"+e.state.quickstart.id+"/dashboards/"+t.filename)}},"Copy JSON to clipboard"),n.a.createElement(N.a.Item,{onClick:function(a){e.showTerraform("./"+e.state.quickstart.id+"/dashboards/"+t.filename)}},"Generate Terraform template")))),n.a.createElement("div",{className:"col-12"},t.screenshots.map((function(t){return n.a.createElement("img",{key:t,src:"data/"+e.state.quickstart.id+"/dashboards/"+t,className:"card-img-top",alt:"..."})}))))}))))))),n.a.createElement(j.a,{show:this.state.accountModalVisible,onHide:this.closeModal},n.a.createElement(j.a.Header,{closeButton:!0},n.a.createElement(j.a.Title,null,"Enter your New Relic account ID")),n.a.createElement(j.a.Body,null,n.a.createElement("p",null,"You can find your account ID in New Relic UI:"),n.a.createElement("input",{type:"text",className:"form-control",id:"accountId","aria-describedby":"Account Id",placeholder:"",value:this.state.accountId,onChange:this.setAccountId})),n.a.createElement(j.a.Footer,null,n.a.createElement(S.a,{variant:"primary",onClick:this.submitModal},"Set"),n.a.createElement(S.a,{variant:"secondary",onClick:this.closeModal},"Cancel"))),n.a.createElement(j.a,{show:this.state.terraformModalVisible,size:"lg",onHide:this.closeModal},n.a.createElement(j.a.Header,{closeButton:!0},n.a.createElement(j.a.Title,null,"Terraform export")),n.a.createElement(j.a.Body,null,n.a.createElement(w,{json:this.state.dashboardJson})),n.a.createElement(j.a.Footer,null,n.a.createElement(S.a,{variant:"primary",onClick:this.closeModal},"Close modal")))):n.a.createElement("div",{className:"album py-2"},n.a.createElement("div",{className:"container",id:"root"},n.a.createElement("div",{className:"row py-4"},n.a.createElement("div",{className:"col-8"},n.a.createElement("h2",null,"Quickstart not found")),n.a.createElement("div",{className:"col-4 text-right"},n.a.createElement(m.Link,{className:"btn btn-default",to:"/"},n.a.createElement(C.a,{icon:O.c})," Back to homepage")))))}}],[{key:"getState",value:function(e){return{quickstart:v.quickstarts.find((function(t){return t.id===e.match.params.handle})),visible:0,accountModalVisible:!1,terraformModalVisible:!1,accountId:""}}},{key:"getDerivedStateFromProps",value:function(e,t){return t.quickstart&&t.quickstart.id===e.match.params.handle?null:a.getState(e)}}]),a}(n.a.Component),q=a(71),T=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).convert=r.convert.bind(Object(h.a)(r)),r.setJson=r.setJson.bind(Object(h.a)(r)),r.state={json:"",parsedJson:{},hasError:!1,errorMessage:""},r}return Object(l.a)(a,[{key:"convert",value:function(){}},{key:"setJson",value:function(e){var t=e.target.value,a={},r=!1,n="";try{a=JSON.parse(t)}catch(s){r=!0,n=s.message}this.setState({json:t,parsedJson:a,hasError:r,errorMessage:n})}},{key:"render",value:function(){return n.a.createElement("div",{className:"album py-2"},n.a.createElement("div",{className:"container",id:"root"},n.a.createElement("div",{className:"row py-4"},n.a.createElement("div",{className:"col-8"},n.a.createElement("h2",null,"Terraform converter"),n.a.createElement("p",null,"Convert a New Relic dashboard JSON to a Terraform template")),n.a.createElement("div",{className:"col-4 text-right"},n.a.createElement(m.Link,{className:"btn btn-default",to:"/"},n.a.createElement(C.a,{icon:O.c})," Back to homepage"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"New Relic JSON"),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("textarea",{className:"form-control",onChange:this.setJson,value:this.state.json,rows:"15"})),n.a.createElement("div",{className:"col-12 text-right pt-2"},n.a.createElement("button",{className:"btn btn-primary",onClick:this.convert},"Convert"))))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 pt-4"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Terraform output"),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 "},this.state.hasError&&n.a.createElement("div",{className:"col-12 text-danger"},this.state.errorMessage),!this.state.hasError&&""!==this.state.json&&n.a.createElement(w,{json:this.state.parsedJson}),""===this.state.json&&n.a.createElement("p",null,"Please enter your New Relic Json.")))))))))}}]),a}(n.a.Component),M=a(294),P=a(296),R=a(292),_=a(54),I=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement(m.HashRouter,null,n.a.createElement("div",{className:"container"},n.a.createElement("header",null,n.a.createElement(M.a,{bg:"light",expand:"lg"},n.a.createElement(_.LinkContainer,{to:"/"},n.a.createElement(M.a.Brand,{to:"/"},"New Relic Quickstarts")),n.a.createElement(M.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(M.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(P.a,{className:"mr-auto"},n.a.createElement(_.LinkContainer,{to:"/"},n.a.createElement(P.a.Link,null,"Home")),n.a.createElement(R.a,{title:"Tools",id:"basic-nav-dropdown"},n.a.createElement(_.LinkContainer,{to:"/tools/terraform"},n.a.createElement(R.a.Item,null,"Terraform converter")))),n.a.createElement("div",{className:"my-2 my-lg-0"},n.a.createElement("a",{href:"https://github.com/newrelic-experimental/quickstarts",target:"_BLANK",rel:"noopener noreferrer",className:"btn btn-light"},n.a.createElement(C.a,{icon:q.a})," Go to Github repository")))))),n.a.createElement("main",{role:"main"},n.a.createElement(d.g,null,n.a.createElement(d.d,{path:"/tools/terraform",component:T}),n.a.createElement(d.d,{path:"/view/:handle",component:x}),n.a.createElement(d.d,{path:"/",component:E}))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(283);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e){e.exports=JSON.parse('{"quickstarts":[{"name":"APM + Infrastructure","authors":["Ryan Jussel"],"sources":["ProcessSample","Transaction"],"alerts":[],"dashboards":[{"name":"APM and Infrastructure","filename":"dashboard.json","sources":["Transaction","ProcessSample"],"screenshots":["dashboard.png"]}],"flex":[],"id":"apm-infrastructure"},{"name":"Browser examples","authors":["New Relic"],"sources":["BrowserInteraction","JavaScriptError","PageView","PageViewTiming","SyntheticCheck","Transaction"],"alerts":[],"dashboards":[{"name":"Browser - Overview","filename":"browser_overview.json","sources":["PageView","SyntheticCheck","PageViewTiming","BrowserInteraction","Transaction"],"screenshots":["browser_overview.png"]},{"name":"Browser - Javascript Errors","filename":"javascript_errors.json","sources":["JavaScriptError","PageView"],"screenshots":["javascript_errors.png"]},{"name":"Browser Traffic Analysis","filename":"traffic_analysis.json","sources":["PageView"],"screenshots":["traffic_analysis.png"]}],"flex":[],"id":"browser"},{"name":"Cassandra","authors":[],"sources":["Transaction"],"alerts":[],"dashboards":[{"name":"Cassandra Client Metrics","filename":"dashboard.json","sources":["Transaction"],"screenshots":["dashboard.png"]}],"flex":[],"id":"cassandra"},{"name":"Cloud adoption","authors":["New Relic"],"sources":["ComputeSample","SyntheticCheck","Transaction"],"alerts":[],"dashboards":[{"name":"Cloud Adoption - Migrate - New Relic One","filename":"migrate.json","sources":["Transaction","SyntheticCheck"],"screenshots":["migrate.png"]},{"name":"Cloud Adoption - Plan - New Relic One","filename":"plan.json","sources":["Transaction","SyntheticCheck"],"screenshots":["plan.png"]},{"name":"Cloud Adoption - Run - New Relic One","filename":"run.json","sources":["ComputeSample"],"screenshots":["run.png"]}],"flex":[],"id":"cloud-adoption"},{"name":"Flex Examples","authors":["Zack Mutchler"],"sources":["Flex"],"alerts":[],"dashboards":[{"name":"Flex","filename":"flex.json","sources":["directorySize","digCheck","fileSize","osqueryOpenSockets","fileCount"],"screenshots":["flex.png"]}],"flex":["directory-size.yml","file-count.yml","file-size.yml","linux-dig.yml","osquery.yml"],"id":"flex-example"},{"name":"CoreDNS","authors":["Stijn Polfliet"],"sources":["Kubernetes","Metric","Prometheus",{"name":"CoreDNS","url":"https://github.com/coredns/coredns/tree/master/plugin/metrics"}],"alerts":[],"dashboards":[{"name":"CoreDNS - Prometheus","filename":"coredns-overview.json","sources":["Metric"],"screenshots":["coredns-overview.png"]}],"flex":[],"id":"k8s-coredns"},{"name":"Kubernetes","authors":["Brad S."],"sources":["K8sContainerSample","K8sNodeSample","K8sPodSample","Kubernetes","Prometheus"],"alerts":[],"dashboards":[{"name":"Kubernetes Clusters and Nodes","filename":"kubernetes_clusters_nodes.json","sources":["K8sNodeSample","K8sPodSample"],"screenshots":["kubernetes_clusters_nodes.png"]},{"name":"Kubernetes Container Restarts","filename":"kubernetes_container_restarts.json","sources":["K8sContainerSample"],"screenshots":["kubernetes_container_restarts.png"]},{"name":"Kubernetes Pod Status","filename":"kubernetes_pod_status.json","sources":["K8sPodSample","K8sContainerSample"],"screenshots":["kubernetes_pod_status.png"]}],"flex":[],"id":"kubernetes"},{"name":"Synthetics","authors":["Breno de Avellar Gomes"],"sources":["SyntheticCheck","SyntheticRequest","Transaction"],"alerts":[],"dashboards":[{"name":"NR-Synthetics unresponsive checks","filename":"debug.json","sources":["SyntheticCheck","SyntheticRequest"],"screenshots":["debug.png"]},{"name":"NR-Synthetics Requests","filename":"detailed.json","sources":["SyntheticRequest","Transaction","SyntheticCheck"],"screenshots":["detailed.png"]},{"name":"NR-Synthetics Checks","filename":"overview.json","sources":["SyntheticCheck"],"screenshots":["overview.png"]}],"flex":[],"id":"synthetics"}]}')},76:function(e,t,a){e.exports=a(284)}},[[76,1,2]]]);
//# sourceMappingURL=main.93f4c7d1.chunk.js.map