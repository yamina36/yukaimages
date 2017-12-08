### 12/07/2017
### Yuka Fukuoka
### Data Visualization
### Assignment #13

## Project Title
Disabled Worker's Real

## Description
This Data visualization compares the number of workers with disabilities and the number of workers not having disabilities. And people can see on map which state in the US is hiring the most disabled people and which state is not hiring the most.

## Demo
[Prototype](http://dsistudents.com/students/Yuka/Datavizfinalproject/index.html)
![image](https://i.imgur.com/e69Qal9.jpg)

## Project Procedure: describe your data processing, visualization selection, and analysis post-visualization
I decided to create this data visualization because I read an article. In this article, one man is struggling to get a job. 

"Gallacher, 28, is a computer expert. He has a bachelor's degree in management and entrepreneurship from Louisiana Tech University. Yet most employers don't give him a second glance when they learn he's blind, even though he is able to operate a computer just fine with a screen reader.

Gallacher is one of nearly 57 million disabled people in America.

Today marks the 25th anniversary of the Americans with Disability Act (ADA), a civil rights act passed in 1990 to fight discrimination against the disabled.

Gallacher, 28, is a computer expert. He has a bachelor's degree in management and entrepreneurship from Louisiana Tech University. Yet most employers don't give him a second glance when they learn he's blind, even though he is able to operate a computer just fine with a screen reader.

Gallacher is one of nearly 57 million disabled people in America.

Today marks the 25th anniversary of the Americans with Disability Act (ADA), a civil rights act passed in 1990 to fight discrimination against the disabled."

My assumption is correct as you can see it above, but after reading reaticle below, I realized my assumption is incorrect. The situation is going to be bad.

"Employment for disabled Americans has actually fallen since 1990, and there's an even bigger gap between disabled and non-disabled jobs prospects today.

In the early 1990s, about half of disabled Americans were employed, according to Census data. Today that has fallen to just 41%. Some of the decline is due to an aging population. Older workers are more likely to have disabilities, especially physical ones.

But it's telling that the employment rate of disabled Americans has dropped more than for the non-disabled."

As like me, a lot of people misunderstand the real situation of issue, so I created the data visualization to tell truth to citizens in the US.

I started thinking about to make a [histogram map](https://datavizcatalogue.com/methods/histogram.html) whcih expresses the time-based transition of social security expences for people who have disability.

![image](https://i.imgur.com/cChB6bb.png)

I decided to combine it with Choropleth Map which expresses the geographical data of patient worker list.

![image](https://i.imgur.com/U5HjU82.png)

I used datas below:

* [Data Retrieval: Labor Force Statistics](https://www.bls.gov/webapps/legacy/cpsatab6.htm)
* [DSee How Your State Ranks In Employment Among Workers with Disabilities](http://fortune.com/2017/02/28/disability-employment-rank/)

Finally I created data visualization below:
1. Showing the difference of employed population rate of people who have disabilities and people who are not disabled state by state.
2. Showing the difference of number of employed poeple who have disabilities and people who are not disabled.

### Analysis
I assumed that New York State and California states, emigrant-friendly states are also promoting employment of people who have disabilities. But the reality was different. Rather than, the state who has few population and few immigrants positively hires disabled people. The reason of that companies do not have many choices in rural state in the US? As expected, the number of employed people with disabilities is very small compared to general people.