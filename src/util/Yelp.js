
const apiKey = 'el9k--cI96DFTlpFBBeJG1_MH5jhSb0lmhj-FxB3k5oYU-mTP-xP6RRVw9deAZ7vM-0uRJRydLY0qiAWJyX5o12PV4u_XxYQU7lCZl1Q3Y4OINu4OLbQfKAyHhPRWnYx';

const Yelp = {
  search (term, location, sortBy) {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=' + term + '&location=' + location + '&sort_by=' + sortBy,
    {headers: {Authorization: `Bearer ${apiKey}`}}
    ).then(response => {
      //console.log(response);
      return response.json();
    }).then(jsonResponse => {
      //console.log(jsonResponse);
      if(jsonResponse.businesses) {
        //console.log(jsonResponse.businesses);
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      }
    });
  }
};

export default Yelp;
