(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{32:function(e){e.exports=JSON.parse('{"quickstarts":[{"name":"APM + Infrastructure","authors":["Ryan Jussel"],"sources":["ProcessSample","Transaction"],"alerts":[],"dashboards":[{"name":"APM and Infrastructure","filename":"dashboard.json","sources":["Transaction","ProcessSample"],"screenshots":["dashboard.png"]}],"id":"apm-infrastructure"},{"name":"Browser examples","authors":["New Relic"],"sources":["BrowserInteraction","JavaScriptError","PageView","PageViewTiming","SyntheticCheck","Transaction"],"alerts":[],"dashboards":[{"name":"Browser - Overview","filename":"browser_overview.json","sources":["PageView","SyntheticCheck","PageViewTiming","BrowserInteraction","Transaction"],"screenshots":["browser_overview.png"]},{"name":"Browser - Javascript Errors","filename":"javascript_errors.json","sources":["JavaScriptError","PageView"],"screenshots":["javascript_errors.png"]},{"name":"Browser Traffic Analysis","filename":"traffic_analysis.json","sources":["PageView"],"screenshots":["traffic_analysis.png"]}],"id":"browser"},{"name":"Cassandra","authors":[],"sources":["Transaction"],"alerts":[],"dashboards":[{"name":"Cassandra Client Metrics","filename":"dashboard.json","sources":["Transaction"],"screenshots":["dashboard.png"]}],"id":"cassandra"},{"name":"Cloud adoption","authors":["New Relic"],"sources":["ComputeSample","SyntheticCheck","Transaction"],"alerts":[],"dashboards":[{"name":"Cloud Adoption - Migrate - New Relic One","filename":"migrate.json","sources":["Transaction","SyntheticCheck"],"screenshots":["migrate.png"]},{"name":"Cloud Adoption - Plan - New Relic One","filename":"plan.json","sources":["Transaction","SyntheticCheck"],"screenshots":["plan.png"]},{"name":"Cloud Adoption - Run - New Relic One","filename":"run.json","sources":["ComputeSample"],"screenshots":["run.png"]}],"id":"cloud-adoption"},{"name":"CoreDNS","authors":["Stijn Polfliet"],"sources":["Kubernetes","Metric","Prometheus",{"name":"CoreDNS","url":"https://github.com/coredns/coredns/tree/master/plugin/metrics"}],"alerts":[],"dashboards":[{"name":"CoreDNS - Prometheus","filename":"coredns-overview.json","sources":["Metric"],"screenshots":["coredns-overview.png"]}],"id":"k8s-coredns"}]}')},55:function(e,t,a){e.exports=a(69)},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(19),c=a.n(s),o=a(9),i=a(10),l=a(11),u=a(12),m=a(22),d=a(6),h=a(14),p=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;Object(o.a)(this,a),r=t.call(this,e);var n="";switch(e.source){case"Transaction":n="APM";break;case"SystemSample":n="Infrastructure";break;case"ProcessSample":n="Infrastructure - Processes";break;case"BrowserInteraction":n="Browser - Interactions";break;case"JavaScriptError":n="Browser - Javascript";break;case"PageViewTiming":n="Browser - Pageview timing";break;case"PageView":n="Browser - Pageviews";break;case"SyntheticCheck":n="Synthetics";break;default:n="object"===typeof e.source&&null!==e.source?e.source.name:e.source}return r.state={name:n},r}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("span",{className:"badge badge-dark"},this.state.name)}}]),a}(n.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"sources"},this.props.sources.map((function(e,t){return n.a.createElement(p,{key:e,source:e})})))}}]),a}(n.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={screenshot:r.props.quickstart.dashboards[Math.floor(Math.random()*r.props.quickstart.dashboards.length)].screenshots[0]},r}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"col-md-4 col-lg-3 col-sm-4"},n.a.createElement("div",{className:"card mb-4 shadow-sm"},n.a.createElement("img",{src:"./data/"+this.props.quickstart.id+"/dashboards/"+this.state.screenshot,className:"card-img-top",alt:"..."}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h5",{className:"card-title"},n.a.createElement(m.b,{className:"",to:"/view/"+this.props.quickstart.id},this.props.quickstart.name,this.props.quickstart.authors.length>0&&n.a.createElement("span",null,n.a.createElement("small",{className:"text-muted text-small"}," created by ",this.props.quickstart.authors.join(", "))))),n.a.createElement(b,{sources:this.props.quickstart.sources}),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center pt-3"}))))}}]),a}(n.a.Component),v=a(32),g=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).state={search:""},r.setSearch=r.setSearch.bind(Object(h.a)(r)),r.search=r.search.bind(Object(h.a)(r)),r}return Object(i.a)(a,[{key:"setSearch",value:function(e,t){this.setState({search:e.target.value})}},{key:"search",value:function(e){var t=this.state.search.toLowerCase();return!!e.name.toLowerCase().includes(t)||!!e.sources.toString().toLowerCase().includes(t)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("section",{className:"jumbotron text-center"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",null,"New Relic - Quick start library"),n.a.createElement("p",{className:"lead text-muted"},"Library of curated dashboards & alerts with their dependencies."))),n.a.createElement("div",{className:"album bg-light"},n.a.createElement("div",{className:"container",id:"root"},n.a.createElement("div",{className:"row py-5"},n.a.createElement("input",{type:"text",className:"form-control",id:"search","aria-describedby":"search",placeholder:"Search for specific datasource or technology",value:this.state.search,onChange:this.setSearch}))),n.a.createElement("div",{className:"container-fluid",id:"root"},n.a.createElement("div",{className:"row py-3"},v.quickstarts.filter(this.search).map((function(e,t){return n.a.createElement(f,{key:e.name,quickstart:e})}))))))}}]),a}(n.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).copyToClipboard=r.copyToClipboard.bind(Object(h.a)(r)),r.state={output:a.generate(e.json)},r}return Object(i.a)(a,[{key:"copyToClipboard",value:function(){var e=this;navigator.permissions.query({name:"clipboard-write"}).then((function(t){"granted"!==t.state&&"prompt"!==t.state||navigator.clipboard.writeText(e.state.output).then((function(){alert("Terraform template copied to clipboard")}),(function(e){console.log("error",e),alert("Failed to copy terraform template to clipboard")}))}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"terraform"},n.a.createElement("button",{className:"btn btn-sm btn-outline-info float-right",onClick:this.copyToClipboard},"Copy to clipboard"),n.a.createElement("pre",{className:"code"},this.state.output))}}],[{key:"generate",value:function(e){var t=[];return t.push('data "newrelic_application" "my_application" {'),t.push('  name = "My Application"'),t.push("}"),t.push(""),t.push('resource "newrelic_dashboard" "exampledash" {'),t.push('  title = "'+e.title+'"'),e.icon&&t.push('  icon = "'+e.icon+'"'),e.visibility&&t.push('  visibility = "'+e.visibility+'"'),e.editable&&t.push('  editable = "'+e.editable+'"'),t.push(""),t.push("  filter {"),t.push("    event_types = ["),t.push(e.filter.event_types.map((function(e){return'        "'+e+'"'})).join(", \n")),t.push("    ]"),e.filter.attributes&&(t.push("    attributes = ["),t.push(e.filter.attributes.map((function(e){return'        "'+e+'"'})).join(", \n")),t.push("    ]")),t.push("  }"),t.push(""),(t=t.concat(e.widgets.map((function(e){var t=[];return t.push("  widget {"),t.push('    title = "'+e.title+'"'),t.push('    visualization = "'+e.process_as+'"'),t.push("    row = "+e.row),t.push("    column = "+e.column),e.width&&t.push("    width = "+e.width),e.height&&t.push("    height = "+e.height),e.notes&&t.push('    notes = "'+e.notes+'"'),e.nrql&&t.push('    nrql = "'+e.nrql+'"'),e.threshold_red&&t.push('    threshold_red = "'+e.threshold_red+'"'),e.threshold_yellow&&t.push('    threshold_yellow = "'+e.threshold_yellow+'"'),t.push("  }"),t.push(""),t.join("\n")})))).push("}"),t.join("\n")}},{key:"getDerivedStateFromProps",value:function(e,t){return t.json!==e.json?{output:a.generate(e.json)}:null}}]),a}(n.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;Object(o.a)(this,a);var n=(r=t.call(this,e)).props.sources.sort().map((function(e,t){if("object"===typeof e&&null!==e)return e;switch(e){case"ComputeSample":return{name:"New Relic Amazon EC2 monitoring integration",url:"https://docs.newrelic.com/docs/integrations/amazon-integrations/aws-integrations-list/aws-ec2-monitoring-integration"};case"SystemSample":case"ProcessSample":return{name:"New Relic Infrastructure",url:"https://docs.newrelic.com/docs/infrastructure/install-configure-manage-infrastructure"};case"PageView":case"BrowserInteraction":case"JavaScriptError":case"PageViewTiming":return{name:"New Relic Browser",url:"https://docs.newrelic.com/docs/browser/new-relic-browser/installation/install-new-relic-browser-agent"};case"SyntheticCheck":return{name:"New Relic Synthetics",url:"https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics"};case"Transaction":return{name:"New Relic APM",url:"https://docs.newrelic.com/docs/apm"};case"Kubernetes":return{name:"New Relic Kubernetes",url:"https://docs.newrelic.com/docs/integrations/kubernetes-integration/get-started/introduction-kubernetes-integration"};case"Prometheus":return{name:"New Relic Prometheus Integration",url:"https://docs.newrelic.com/docs/integrations/prometheus-integrations/install-configure/install-update-or-uninstall-your-prometheus-openmetrics-integration"};case"Log":return{name:"New Relic Logs",url:"https://docs.newrelic.com/docs/logs"};case"Metric":return{};default:return{name:"Unknown source: "+e}}})).sort().filter((function(e,t,a){return!!e.name&&(!t||e.name!==a[t-1].name)}));return r.state={requirements:n},r}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("ul",null,this.state.requirements.sort((function(e,t){return e.name>t.name?1:-1})).map((function(e,t){return e.url?n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url,target:"_BLANK",rel:"noopener noreferrer"},e.name)):n.a.createElement("li",{key:e.name},e.name)})))}}]),a}(n.a.Component),y=a(76),k=a(75),N=a(49),j=a(24),C=a(30),S=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this,e)).modalCallback=void 0,r.state=a.getState(e),r.copy=r.copy.bind(Object(h.a)(r)),r.setAccountId=r.setAccountId.bind(Object(h.a)(r)),r.submitModal=r.submitModal.bind(Object(h.a)(r)),r.closeModal=r.closeModal.bind(Object(h.a)(r)),r.showTerraform=r.showTerraform.bind(Object(h.a)(r)),r}return Object(i.a)(a,[{key:"getAccountId",value:function(e){this.modalCallback=e,this.setState({accountModalVisible:!0})}},{key:"submitModal",value:function(){this.setState({accountModalVisible:!1}),this.modalCallback&&this.modalCallback()}},{key:"closeModal",value:function(){this.setState({accountModalVisible:!1,terraformModalVisible:!1})}},{key:"setAccountId",value:function(e){this.setState({accountId:e.target.value})}},{key:"getDashboard",value:function(e,t){var a=this;this.getAccountId((function(){a.getFile(e).then((function(e){e.dashboard_account_id=+a.state.accountId,t(JSON.stringify(e))}))}))}},{key:"getFile",value:function(e){return fetch("./data/"+e).then((function(e){return e.json()}))}},{key:"copy",value:function(e){this.getDashboard(e,(function(e){navigator.permissions.query({name:"clipboard-write"}).then((function(t){"granted"!==t.state&&"prompt"!==t.state||navigator.clipboard.writeText(e).then((function(){alert("Dashboard copied to clipboard")}),(function(e){console.log("error",e),alert("Failed to copy dashboard to clipboard")}))}))}))}},{key:"showTerraform",value:function(e){var t=this;console.log(e),this.getFile(e).then((function(e){t.setState({terraformModalVisible:!0,dashboardJson:e})}))}},{key:"render",value:function(){var e=this;return this.state.quickstart?n.a.createElement("div",{className:"album py-2"},n.a.createElement("div",{className:"container",id:"root"},n.a.createElement("div",{className:"row py-4"},n.a.createElement("div",{className:"col-8"},n.a.createElement("h2",null,this.state.quickstart.name)),n.a.createElement("div",{className:"col-4 text-right"},n.a.createElement(m.b,{className:"btn btn-default",to:"/"},n.a.createElement(j.a,{icon:C.c})," Back to homepage"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{class:"col-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Description"),n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{class:"row"},n.a.createElement("div",{className:"col-8"},n.a.createElement("h5",null,"Installation instructions"),n.a.createElement("p",null,"This dashboard requires the following New Relic products:"),n.a.createElement(E,{sources:this.state.quickstart.sources}),n.a.createElement("p",null,n.a.createElement("b",null,"Data sources: ",n.a.createElement(b,{sources:this.state.quickstart.sources}))),this.state.quickstart.authors.length>0&&n.a.createElement("p",null,n.a.createElement("b",null,"Created by:")," ",this.state.quickstart.authors.join(", "))),n.a.createElement("div",{className:"col-4 text-right"},n.a.createElement("a",{className:"btn btn-danger",href:"https://github.com/newrelic-experimental/quickstarts/issues/new?labels=bug&title=Problem%20with%20"+this.state.quickstart.id},n.a.createElement(j.a,{icon:C.a})," Report a problem"))))))),n.a.createElement("div",{className:"row mt-4"},n.a.createElement("div",{className:"col-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Dashboards"),n.a.createElement("div",{className:"card-body"},this.state.quickstart.dashboards.map((function(t){return n.a.createElement("div",{key:t.filename,className:"row px-4 py-4"},n.a.createElement("div",{className:"col-8 py-1"},n.a.createElement("h3",null,t.name)),n.a.createElement("div",{className:"col-4 text-right"},n.a.createElement(y.a,null,n.a.createElement(y.a.Toggle,{variant:"default",id:"dropdown-basic"},n.a.createElement(j.a,{icon:C.b})," Import dashboard"),n.a.createElement(y.a.Menu,null,n.a.createElement(y.a.Item,{onClick:function(a){e.copy("./"+e.state.quickstart.id+"/dashboards/"+t.filename)}},"Copy JSON to clipboard"),n.a.createElement(y.a.Item,{onClick:function(a){e.showTerraform("./"+e.state.quickstart.id+"/dashboards/"+t.filename)}},"Generate Terraform template")))),n.a.createElement("div",{className:"col-12"},t.screenshots.map((function(t){return n.a.createElement("img",{key:t,src:"data/"+e.state.quickstart.id+"/dashboards/"+t,className:"card-img-top",alt:"..."})}))))}))))))),n.a.createElement(k.a,{show:this.state.accountModalVisible,onHide:this.closeModal},n.a.createElement(k.a.Header,{closeButton:!0},n.a.createElement(k.a.Title,null,"Enter your New Relic account ID")),n.a.createElement(k.a.Body,null,n.a.createElement("p",null,"You can find your account ID in New Relic UI:"),n.a.createElement("input",{type:"text",className:"form-control",id:"accountId","aria-describedby":"Account Id",placeholder:"",value:this.state.accountId,onChange:this.setAccountId})),n.a.createElement(k.a.Footer,null,n.a.createElement(N.a,{variant:"primary",onClick:this.submitModal},"Set"),n.a.createElement(N.a,{variant:"secondary",onClick:this.closeModal},"Cancel"))),n.a.createElement(k.a,{show:this.state.terraformModalVisible,size:"lg",onHide:this.closeModal},n.a.createElement(k.a.Header,{closeButton:!0},n.a.createElement(k.a.Title,null,"Terraform export")),n.a.createElement(k.a.Body,null,n.a.createElement(w,{json:this.state.dashboardJson})),n.a.createElement(k.a.Footer,null,n.a.createElement(N.a,{variant:"primary",onClick:this.closeModal},"Close modal")))):n.a.createElement("div",{className:"album py-2"},n.a.createElement("div",{className:"container",id:"root"},n.a.createElement("div",{className:"row py-4"},n.a.createElement("div",{className:"col-8"},n.a.createElement("h2",null,"Quickstart not found")),n.a.createElement("div",{className:"col-4 text-right"},n.a.createElement(m.b,{className:"btn btn-default",to:"/"},n.a.createElement(j.a,{icon:C.c})," Back to homepage")))))}}],[{key:"getState",value:function(e){return{quickstart:v.quickstarts.find((function(t){return t.id===e.match.params.handle})),visible:0,accountModalVisible:!1,terraformModalVisible:!1,accountId:""}}},{key:"getDerivedStateFromProps",value:function(e,t){return t.quickstart&&t.quickstart.id===e.match.params.handle?null:a.getState(e)}}]),a}(n.a.Component),O=a(51),q=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(m.a,null,n.a.createElement("header",null,n.a.createElement("div",{className:"navbar navbar-dark bg-dark shadow-sm"},n.a.createElement("div",{className:"container d-flex justify-content-between"},n.a.createElement(m.b,{className:"navbar-brand d-flex align-items-center",to:"/"},n.a.createElement("strong",null,"New Relic Quickstarts")),n.a.createElement("a",{href:"https://github.com/newrelic-experimental/quickstarts",target:"_BLANK",rel:"noopener noreferrer",className:"btn btn-light"},n.a.createElement(j.a,{icon:O.a})," Go to Github repository")))),n.a.createElement("main",{role:"main"},n.a.createElement(d.c,null,n.a.createElement(d.a,{path:"/view/:handle",component:S}),n.a.createElement(d.a,{path:"/",component:g}))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(68);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.b72d8a1f.chunk.js.map