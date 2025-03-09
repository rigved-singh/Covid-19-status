$(document).ready(function(){
    init();

    function init() {
        let url = "https://api.covid19api.com/summary";

        $.get(url, function(data){
            let Countries = data.Countries;
            $('#country').append(`<option value="global">Global</option>`);

            Countries.forEach((element, index) => {
                $('#country').append(`<option value="${index}">${element.Country}</option>`);
            });

            // Display global data initially
            updateCards(data.Global);

            // Change data based on country selection
            $("#country").change(function(){
                let countryIdx = $("#country").val();
                if (countryIdx === "global") {
                    updateCards(data.Global);
                } else {
                    updateCards(Countries[countryIdx]);
                }
            });

        }).fail(function() {
            alert("Failed to fetch data. Please try again later.");
        });

        function updateCards(data) {
            $('#newCases').html(data.NewConfirmed);
            $('#totalCases').html(data.TotalConfirmed);
            $('#newRecovered').html(data.NewRecovered);
            $('#recoveredCases').html(data.TotalRecovered);
            $('#activeCases').html(data.TotalConfirmed - data.TotalRecovered - data.TotalDeaths);
            $('#newDeaths').html(data.NewDeaths);
            $('#totalDeaths').html(data.TotalDeaths);
        }
    }
});
