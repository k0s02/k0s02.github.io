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
    var minlvl = 110;
    var maxlvl = 110; 

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

                var SQL = "INSERT INTO creature_template (entry, gossip_menu_id, minlevel, maxlevel, faction, npcflag, flags_extra, flags_extra2, AIName) VALUES (" + entry + ", " + gossipid + ", " + minlvl + ", " + maxlvl + ", " + factionid + ", " + npcflags_value + ", " + flagsextra_value + ", " + flagsextra2_value + ", " + smart + ");\n
                           INSERT INTO creature_template_wdb (Entry, Name1, Title, DisplayId1) VALUES (" + entry + ", " + name + ", " + subName + ", " + modelid + ");\n"

                textarea.value = SQL;
                copyText('textarea');
              break;
        }
    if(document.getElementById("c_entry").value == "")
  {
    alert("Warning! ENTRY field cannot be EMPTY!");
    
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

function convert(object)
            {
                var waypointValue = document.getElementById('waypoint').value;
                var converted = waypointValue.valueOf();

                while (converted.search("0, 0, 0, 0, 0, 100, 0, 0") != -1)
                  converted = converted.replace("0, 0, 0, 0, 0, 100, 0, 0", "''");

                converted = converted.replace("`id`, `point`,", "`entry`, `pointid`,").replace("`orientation`, `delay`, `move_type`, `speed`, `action`, `action_chance`, `entry`, `wpguid`", "`point_comment`").replace("`waypoint_data`", "`waypoints`");
        
                document.getElementById('waypointSQL').value = converted;
                var waypointSQL = document.getElementById('waypointSQL');
                waypointSQL.hidden = false;
                waypointSQL.select();
                document.execCommand("copy");
            }
  
/*function showData(object)
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
  
}*/
