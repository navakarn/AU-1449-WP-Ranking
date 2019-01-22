    const onDataLoaded = (data) => {

    	//document.getElementById('dd-btn-server').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'A1').content.$t;
        
    	document.getElementById('day_update_1').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'B1').content.$t;
    	document.getElementById('day_update_2').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'D1').content.$t;
        
    	document.getElementById('pills-osaka-tab').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'A1').content.$t;
    	document.getElementById('pills-tokyo-tab').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'C1').content.$t;


    	document.getElementById('war_name1_1').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'A2').content.$t;
    	document.getElementById('guild_name1_1').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'B2').content.$t;

    	document.getElementById('war_name1_2').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'A3').content.$t;
    	document.getElementById('guild_name1_2').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'B3').content.$t;

    	document.getElementById('war_name1_3').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'A4').content.$t;
    	document.getElementById('guild_name1_3').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'B4').content.$t;

    	document.getElementById('war_name1_4').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'A5').content.$t;
    	document.getElementById('guild_name1_4').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'B5').content.$t;


    	document.getElementById('war_name2_1').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'C2').content.$t;
    	document.getElementById('guild_name2_1').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'D2').content.$t;

    	document.getElementById('war_name2_2').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'C3').content.$t;
    	document.getElementById('guild_name2_2').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'D3').content.$t;

    	document.getElementById('war_name2_3').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'C4').content.$t;
    	document.getElementById('guild_name2_3').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'D4').content.$t;

    	document.getElementById('war_name2_4').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'C5').content.$t;
    	document.getElementById('guild_name2_4').innerHTML = data.feed.entry.find((entry) => entry.title.$t == 'D5').content.$t;


    }
