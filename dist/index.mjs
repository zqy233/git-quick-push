import{Command as p}from"commander";import g from"figlet";import i from"@darkobits/lolcatjs";import u from"ora";import r from"shelljs";import o from"inquirer";function l(){const t=g.textSync("git-quick-push"),e=i.fromString(t);console.log(e)}const s=[{emoji:":tada:",commit:"first commit "},{emoji:":sparkles:",commit:"new feature "},{emoji:":bug:",commit:"fix bug "},{emoji:":lipstick:",commit:"update ui and style files "},{emoji:":fire:",commit:"remove code or file "},{emoji:":art:",commit:"improve code structure or code format "},{emoji:":zap:",commit:"improve performance "},{emoji:":memo:",commit:"document writing "}],f=s.map(t=>t.emoji),c=s.map(t=>t.commit),m=t=>{const e=u("").start();r.exec(t),e.succeed("command finished"),n()},h=async()=>{const{type:t}=await o.prompt([{type:"list",name:"type",message:i.fromString("please select the command"),choices:["git checkout","git checkout -b"]}]),{input:e}=await o.prompt([{type:"input",name:"input",message:i.fromString("input branch name :")}]);m(`${t} ${e}`)},y=async()=>{r.exec("git add .");const{type:t}=await o.prompt([{type:"list",name:"type",message:i.fromString("please select the commit category"),choices:c}]),{input:e}=await o.prompt([{type:"input",name:"input",message:i.fromString("full details :")}]);m(`git commit -m "${f[c.indexOf(t)]}${e?t+": "+e:t}"`)},d=async()=>{const{type:t}=await o.prompt([{type:"list",name:"type",message:i.fromString("select remote command"),choices:["git remote -v","git remote add origin","git remote set-url origin"]}]);if(t==="git remote -v")return m(t);const{input:e}=await o.prompt([{type:"input",name:"input",message:i.fromString("repository url:")}]);m(`${t} ${e}`)},w=async()=>{const{type:t}=await o.prompt([{type:"list",name:"type",message:i.fromString("select push command"),choices:["git push -u","git push"]}]);if(t==="git push")return m(t);const{input:e}=await o.prompt([{type:"input",name:"input",message:i.fromString("repository name and branch name:")}]);m(`${t} ${e}`)},b=async()=>{const{input:t}=await o.prompt([{type:"input",name:"input",message:i.fromString("merged branch name:")}]);m(`git merge --no-ff ${t}`)},n=async()=>{const{git:t}=await o.prompt([{type:"list",name:"git",message:i.fromString("please choose git commands"),choices:["git init","git branch","git checkout","git remote","git commit","git pull","git push","git merge"]}]);if(!r.which("git"))return r.echo("Sorry, you need download git first"),r.exit(1);switch(t){case"git init":m(t);break;case"git branch":m(t);break;case"git checkout":h();break;case"git pull":m(t);break;case"git push":w();break;case"git commit":y();break;case"git remote":d();break;case"git merge":b()}};l();const a=new p;a.command("list").description("show a list of git commands").action(()=>{n()}),a.version("1.0.26").parse(process.argv);
