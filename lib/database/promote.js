function _0x1792(_0x73e22e,_0x2bc96f){var _0x360501=_0x3605();return _0x1792=function(_0x179241,_0x2972d2){_0x179241=_0x179241-0x1a7;var _0x4d4f1b=_0x360501[_0x179241];return _0x4d4f1b;},_0x1792(_0x73e22e,_0x2bc96f);}var _0xa8b5ca=_0x1792;(function(_0x269a69,_0x3a4ee7){var _0x36aa6f=_0x1792,_0x3a9b3e=_0x269a69();while(!![]){try{var _0x394ce4=-parseInt(_0x36aa6f(0x1ac))/0x1*(parseInt(_0x36aa6f(0x1b0))/0x2)+-parseInt(_0x36aa6f(0x1b1))/0x3+-parseInt(_0x36aa6f(0x1b3))/0x4+parseInt(_0x36aa6f(0x1bd))/0x5*(-parseInt(_0x36aa6f(0x1bc))/0x6)+-parseInt(_0x36aa6f(0x1ad))/0x7+parseInt(_0x36aa6f(0x1b6))/0x8+parseInt(_0x36aa6f(0x1b9))/0x9;if(_0x394ce4===_0x3a4ee7)break;else _0x3a9b3e['push'](_0x3a9b3e['shift']());}catch(_0x5c874f){_0x3a9b3e['push'](_0x3a9b3e['shift']());}}}(_0x3605,0x8e906));const config=require(_0xa8b5ca(0x1b2)),{DataTypes}=require(_0xa8b5ca(0x1a9)),PromoteDB=config[_0xa8b5ca(0x1b7)][_0xa8b5ca(0x1b5)](_0xa8b5ca(0x1ba),{'chat':{'type':DataTypes[_0xa8b5ca(0x1bb)],'allowNull':![]},'type':{'type':DataTypes[_0xa8b5ca(0x1a7)],'allowNull':![]},'message':{'type':DataTypes[_0xa8b5ca(0x1a7)],'allowNull':![]},'status':{'type':DataTypes[_0xa8b5ca(0x1b4)],'allowNull':![]}});async function getPromote(_0x25a5ee=null,_0x2882fb=null){var _0x53fe98=_0xa8b5ca,_0x13b7e0=await PromoteDB['findAll']({'where':{'chat':_0x25a5ee,'type':_0x2882fb}});return _0x13b7e0[_0x53fe98(0x1a8)]<0x1?![]:_0x13b7e0[0x0][_0x53fe98(0x1be)];}async function setPromote(_0x50c595=null,_0x1be735=null,_0x37acb0=null){var _0x3639e6=_0xa8b5ca,_0x3b998f=await PromoteDB[_0x3639e6(0x1b8)]({'where':{'chat':_0x50c595,'type':_0x1be735}});return _0x3b998f['length']<0x1?await PromoteDB[_0x3639e6(0x1af)]({'chat':_0x50c595,'message':_0x37acb0,'type':_0x1be735,'status':!![]}):await _0x3b998f[0x0][_0x3639e6(0x1ab)]({'chat':_0x50c595,'message':_0x37acb0});}async function ResponsePromote(_0x12f833=null,_0xf0f6c5=null){var _0x1f87b7=_0xa8b5ca,_0x444cc6=await PromoteDB[_0x1f87b7(0x1b8)]({'where':{'chat':_0x12f833,'type':_0xf0f6c5}});if(_0x444cc6[_0x1f87b7(0x1a8)]<0x1)return![];return _0x444cc6[0x0][_0x1f87b7(0x1be)][_0x1f87b7(0x1aa)]?await _0x444cc6[0x0]['update']({'chat':_0x12f833,'status':![]}):await _0x444cc6[0x0]['update']({'chat':_0x12f833,'status':!![]});}async function delPromote(_0x948202=null,_0x57cb07=null){var _0x4c6838=_0xa8b5ca,_0x33dc4a=await PromoteDB[_0x4c6838(0x1b8)]({'where':{'chat':_0x948202,'type':_0x57cb07}});return await _0x33dc4a[0x0][_0x4c6838(0x1ae)]();}function _0x3605(){var _0x3294de=['4326QGkypU','3755PdBrnb','dataValues','TEXT','length','sequelize','status','update','10317TJnbCB','2591638pWgrab','destroy','create','174Oegcot','889653IauAjc','../../config','256124HpqXXF','BOOLEAN','define','5516312LviSjk','DATABASE','findAll','18578421oNFOai','Promote','STRING'];_0x3605=function(){return _0x3294de;};return _0x3605();}async function sendPromote(_0x748275=null,_0x3db82a=null){return new Promise(async(_0x3e24aa,_0x40f83a)=>{var _0x5157d0=_0x1792;try{var _0x52d617=await PromoteDB['findAll']({'where':{'chat':_0x748275,'type':_0x3db82a}});_0x52d617[_0x5157d0(0x1a8)]<0x1?_0x3e24aa(![]):_0x3e24aa(_0x52d617[0x0][_0x5157d0(0x1be)][_0x5157d0(0x1aa)]);}catch{_0x3e24aa(![]);}});}module['exports']={'PromoteDB':PromoteDB,'setMessage':setMessage,'getPromote':getPromote,'delPromote':delPromote,'ResponsePromote':ResponsePromote,'sendPromote':sendPromote};