const fetchResults = (endpoint, callback) => { 
  let results = { 
    data: {
      items: [1,2,3,4]
    }}
  let error = 'error'
  return callback(results, error)
}

const renderResults = json => json 
//const renderResults = (json, error) => error ? error : json 
    
// fetchResults('autoscout/v2/autos?location=bonn', (json, error) => renderResults(json, error))
fetchResults('autoscout/v2/autos?location=bonn', renderResults)
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      
                                      