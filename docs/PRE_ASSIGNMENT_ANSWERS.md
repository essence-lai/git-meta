### What do you think are the greatest areas of risk in completing the project?
    - The project can be broken down into 3 parts
        - Graph UI Design
        - Soft Search Functionality
        - Github Rest API request
    - The greatest areas of risk would be the design of the search functionality, since the rate limit of github api is around 60 unauthenticated  calls per hours with the option to increase to 1500 calls per hour with authentication (ref: https://docs.github.com/en/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28), the concern here will be returning the list of possible values in a soft search would cause a rate limit would be issue for a larger size of users, for this project, I am assuming there would be less than 100 users per hour on this.  There would also be a retry that must be enable for process jobs, https://docs.github.com/en/rest/metrics/statistics?apiVersion=2022-11-28
### What changes/additions would you make to the design?
    - I would change the number of commits to the number of commits made by users, there could be many instances of false information where a bot would update commits to make the user of the application think that it is a busy repository
    - I would include verified commit messages for more accurate authentication of quality of commits
### List two or three features that you would consider implementing in the future that would add significant value to the project.
    - the ability to bring up contributors of a repository
    - the ability to see the amount of times a repo was cloned or forked.
    - implement kubernetes pods to scale application
    - link to available repository
### Are there any clarifying questions you would ask? If you're able to make assumptions about these and continue, please record and share your assumptions
    - what # users and # transactions
    - what is the breakdown of users that will use this tool( assuming primarily developers)
    - should there be labels on the x and y axis (assuming no)
    - should there be label values on the x and y axis (assuming no)
    - the graph does not show a years worth of data points , is it suppose to have some type of horizontal view port? assuming from the requirements that I will be showing 52 weeks worth of data points