(() => {
 'use strict';
 const form=document.getElementById('sales-form');if(!form)return;
 const steps=Array.from(form.querySelectorAll('[data-step]')),back=document.getElementById('back'),next=document.getElementById('next'),send=document.getElementById('send'),message=document.getElementById('sales-message');
 const titles=['Seu contato','Sua organização','Perfil energético','Seus objetivos','Conferência'];
 let step=0,requestId='',lastPayload='',busy=false;
 const value=name=>form.elements.namedItem(name).value.trim();
 const goals=()=>Array.from(form.querySelectorAll('input[name="goals"]:checked')).map(n=>n.value);
 function valid(index){for(const el of steps[index].querySelectorAll('input,select')){if(!el.reportValidity())return false;}if(index===3&&!goals().length){message.textContent='Selecione pelo menos um objetivo.';return false;}return true;}
 function review(){const dl=document.getElementById('review');dl.replaceChildren();for(const [label,text] of [['Contato',value('name')+' · '+value('email')],['Empresa',value('company')+' · '+value('cnpj')],['Estrutura',value('units')+' unidades · '+value('users')+' usuários'],['Objetivos',Array.from(form.querySelectorAll('input[name="goals"]:checked')).map(n=>n.parentElement.textContent.trim()).join(', ')]]){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=text;dl.append(dt,dd);}}
 function show(){steps.forEach((s,i)=>{s.hidden=i!==step;});back.hidden=step===0;next.hidden=step===4;send.hidden=step!==4;document.getElementById('step-status').textContent='Etapa '+(step+1)+' de 5 · '+titles[step];document.getElementById('step-progress').value=step+1;message.textContent='';if(step===4)review();}
 back.addEventListener('click',()=>{if(!busy){step--;show();}});next.addEventListener('click',()=>{if(!busy&&valid(step)){step++;show();steps[step].querySelector('input,select')?.focus();}});
 form.addEventListener('submit',async e=>{e.preventDefault();if(busy)return;if(step<4){next.click();return;}for(let i=0;i<5;i++){if(!valid(i)){step=i;show();valid(i);return;}}
 const payload={name:value('name'),company:value('company'),cnpj:value('cnpj'),jobTitle:value('jobTitle'),email:value('email'),phone:value('phone'),units:Number(value('units')),users:Number(value('users')),freeMarket:value('freeMarket'),solar:value('solar')==='true',buysEnergy:value('buysEnergy')==='true',management:value('management'),goals:goals(),contactMethod:value('contactMethod'),consent:form.elements.namedItem('consent').checked,consentVersion:'sales-contact-v1',website:value('website')};
 const fingerprint=JSON.stringify(payload);if(!requestId||fingerprint!==lastPayload){requestId=crypto.randomUUID();lastPayload=fingerprint;}
 busy=true;form.querySelectorAll('button').forEach(b=>b.disabled=true);send.textContent='Confirmando recebimento…';message.textContent='';
 const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),20000);
 try{const response=await fetch(form.dataset.api,{method:'POST',credentials:'omit',headers:{'Content-Type':'application/json'},body:JSON.stringify({...payload,requestId}),signal:controller.signal});const result=await response.json().catch(()=>null);
 if(!response.ok){message.textContent=response.status===400?'Confira o CNPJ, telefone com +55 e demais campos.':response.status===429?'Limite de solicitações atingido. Tente novamente mais tarde.':'Recebimento não confirmado. Tente novamente ou fale com a Expert Energy.';return;}
 if(result?.status!=='RECEIVED'||result?.receipt!==requestId)throw new Error('Unconfirmed receipt');
 message.textContent='Solicitação recebida. Protocolo: '+result.receipt+'. A equipe avaliará seu perfil e entrará em contato. Nenhuma contratação foi realizada.';form.querySelectorAll('input,select,button').forEach(el=>el.disabled=true);form.dataset.received='true';
 }catch{message.textContent='Não foi possível confirmar o recebimento. Você pode tentar novamente; o mesmo envio mantém seu protocolo.';}
 finally{clearTimeout(timeout);busy=false;if(form.dataset.received!=='true')form.querySelectorAll('button').forEach(b=>b.disabled=false);send.textContent=form.dataset.received==='true'?'Recebido':'Solicitar avaliação';}
 });
})();
