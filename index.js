              <script>
                                          const domain = ['viserx.com', 'github.com']
                                          const getDataFromApi = async () => {
                                             const URL = "https://rdap.namecheap.com/domain/"
                                             domain.map( async item => {
                                                const response = await fetch(URL + item);
                                                console.log(response);
                                             })

                                          }
                                          getDataFromApi(URL);
                                       </script>
