function copyText(target) {
    var text = document.getElementById(target);
    text.select();
    document.execCommand("copy");
}

function sendData(object){
    // DO NOT DELETE!!!!!!!!!
    var textarea = document.getElementById('textarea');
    textarea.hidden = false;
    switch(object)
        {
            case 'creature_generator':
                var entry = document.getElementById('c_entry').value;
                var name = document.getElementById('c_name').value;
                var subName = document.getElementById('c_subname').value;
                var gossipid = document.getElementById('c_gossipmenuid').value;
                var modelid = document.getElementById('c_modelid').value;
                var factionid = document.getElementById('c_factionid').value;
                var smartai = document.getElementById('c_smartai');
                var smartai_option = smartai.options[smartai.selectedIndex].value;
                var npcflags = document.getElementsByName('npcFlags');
                var npcflags_length = npcflags.length;
                var npcflags_value = 0;
                var flagsextra = document.getElementsByName('flagsExtra');
                var flagsextra_length = flagsextra.length;
                var flagsextra_value = 0;
		var flagsextra2 = document.getElementsByName('flagsExtra2');
                var flagsextra2_length = flagsextra2.length;
                var flagsextra2_value = 0;	
                var smart = "'" + "" + "'"  ;

                name = "'" + name + "'";
                subName = "'" + subName + "'";
                if (smartai_option == 1) {
                  smart = "'" + "SmartAI" + "'";
                }
                for (var i=0; i<npcflags_length; i++) {
                  if (npcflags[i].checked) {
                    npcflags_value += Number(npcflags[i].value);
                  }
                }
                for (var j=0; j<flagsextra_length; j++) {
                  if (flagsextra[j].checked) {
                    flagsextra_value += Number(flagsextra[j].value);
                  }
                }
		for (var j=0; j<flagsextra2_length; j++) {
                  if (flagsextra2[j].checked) {
                    flagsextra2_value += Number(flagsextra2[j].value);
                  }
                }	

                var SQL = "INSERT INTO creature_template (entry, name, subname, gossip_menu_id, modelid1, faction, npcflag, flags_extra, flags_extra2 AIName) VALUES (" + entry + ", " + name + ", " + subName + ", " + gossipid + ", " + modelid + ", " + factionid + ", " + npcflags_value + ", " + flagsextra_value + ", " + flagsextra2_value + ", " + smart + ");\n";
                textarea.value = SQL;
                copyText('textarea');
              break;
        }
		if(document.getElementById("c_entry").value == "")
  {
		alert("Warning! ENTRY field is empty!");
		
  }	
}


function fillTextTrigger()
{
	var triggerButton = document.getElementById("triggerButton");
	triggerButton.onclick = function()
	{
		if(this.onclick)
		{
			c_modelid.value = "28998";
			c_smartai.selectedIndex = true;
			c_name.value = "Trigger ";
			c_factionid.value = "35";
			flagsExtra.checked = true;
			
		}
		
	}
	
}
	
window.onload = fillTextTrigger;
	
function showData(object)
{
      var target = document.getElementById(object);
      var button;
  switch (object)
  {
      case 'npc_flag':
        target = document.getElementById('npcFlag_tab');
        button = document.getElementsByName('npcFlag_button')[0];
      break;
      case 'flags_extra':
        target = document.getElementById('flagsExtra_tab');
        button = document.getElementsByName('flagsExtra_button')[0];
      break;
 
    default:
      alert("This object does not exist in js script");
    break;
  }
  
  if(target.hidden == true)
  {
    target.hidden = false;
    button.style.color = "lightgreen";
  }
  else
  {
    target.hidden = true;
    button.style.color = "inherit";
  }
  
}
