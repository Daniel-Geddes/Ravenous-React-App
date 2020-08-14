const apiKey = "q0CtU8ZMPqCdq112PWHGhfaqjIokWc0B-K40N_IEcUnXh4caQuppeig8pmWa9YLY7YOUHti1xlHjxIuhngjJ5YChImXtfXFp8T44IeTREtqMDk-6jH7go5SUaWA1X3Yx";

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then (response => {
            return response.json();
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imgSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                });
            }
        }) 
    }
};

export default Yelp;