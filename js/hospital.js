$(document).ready(function(){
    var input = $('#search').val();

    $('#search-form').click(function(){
        console.log('hello')
        if(input === 'parkinson'){
            console.log('annnd');
            var results = '';
            results += '<form class="paginate">';
            results += '<a href="doctors.html">'
            results += '<div class="col-md-12 news-post" style="background: white;\n' +
                '    padding: 20px;\n' +
                '    margin-top: 15px; border-color: #4aa1f3">';
            results += '<div class="row">';

            // results += '<a href='+data.response.results[i].webUrl+' target="_blank" style="color:#4aa1f3; text-decoration:none;">';
            results += '<div class="col-md-1"></div>';
            results += '<div class="col-md-1">';
            results += '<img src="hospital.jpg" style="width:150px; height:150px" class="img-responsive" />'
            results += '</div>';

            results += '<div class="col-md-1"></div>';
            results += '<div class=col-md-8>';
            // results += '<h4 class="news-date">'+new Date(Date.parse(data.response.results[i].webPublicationDate)).toDateString()+'</h4>';
            // results += '<h3>'+data.response.results[i].fields.headline+'</h3>';
            results += '<h4  style="font-size:40px;\n' +
                '    color:#333333 !important;"class="news-text">Oulu Hospital</h4>';
            results += '<h3>Tellus Innovation, Oulu University</h3>';
            results += '<h2></h2>';
            results += '</div>';

            results += '</div>';
            results += '</div>';
            results += '</a>';
            results += '</form>';



            results += '<form class="paginate">';
            results += '<a href="#">'
            results += '<div class="col-md-12 news-post" style="background: white;\n' +
                '    padding: 20px;\n' +
                '    margin-top: 15px; border-color: #4aa1f3">';
            results += '<div class="row">';

            // results += '<a href='+data.response.results[i].webUrl+' target="_blank" style="color:#4aa1f3; text-decoration:none;">';
            results += '<div class="col-md-1"></div>';
            results += '<div class="col-md-1">';
            results += '<img src="hospital.jpg" style="width:150px; height:150px" class="img-responsive" />'
            results += '</div>';

            results += '<div class="col-md-1"></div>';
            results += '<div class=col-md-8>';
            // results += '<h4 class="news-date">'+new Date(Date.parse(data.response.results[i].webPublicationDate)).toDateString()+'</h4>';
            // results += '<h3>'+data.response.results[i].fields.headline+'</h3>';
            results += '<h4  style="font-size:40px;\n' +
                '    color:#333333 !important;"class="news-text">Oulu City Hospital</h4>';
            results += '<h3>Kiviharjuntie 5, 90220, Oulu</h3>';
            results += '<h2></h2>';
            results += '</div>';

            results += '</div>';
            results += '</div>';
            results += '</a>';
            results += '</form>';

            $('#hospitalResults').html(results);
        }
    })
})