import React from "react"
import styled from 'styled-components'

const TextWrapper = styled.div`
  margin: auto;
  max-width: 1000px;
`

const Link = styled.a`
 color: white;
`

const HeaderWrap = styled.h1`
  padding: 1em;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px #282828;
`

const DWrap = styled.div`
  padding: 2em;
`

const ImageWrapper = styled.img`
  margin: auto;
  max-width: 350px;
`

const ImgDiv = styled.div`
  text-align: center;
`

const FigWrap = styled.figure`
  padding: 1vw;
  display: inline-block;
`

const FigTextWrap = styled.figcaption`
  font-size: small;
`


const ProjectOne = () => {
  return (
    <TextWrapper>
      <HeaderWrap>
        <Link href="https://github.com/CodesReallyWell/CryptoProject">Social Media Influence on Ethereum Value</Link>
      </HeaderWrap>
      <DWrap>
        <h2>Abstract</h2>
        With Cryptocurrencies high return and volatility it is an important topic of discussion on forums 
        like Reddit. In this social media study, we will use sentiment analysis, Granger causality, and 
        Naive Bayes to determine a relation between positive comments and Cryptocurrency value. Since 
        there are so many types of Cryptocurrencies, we have decided to focus on one, Ethereum. Ethereum 
        is an open-source, public, blockchain-based distributed computing platform and operating system.
        <br/><br/>
        <h2>Methodology and experimental design</h2>
        Data was collected within the time frame of  May 2017 to July 2017. The data includes 
        two data sets, one with the price of the Ethereum in the given timeframe, and another with 
        comments from Reddit filtered with keywords related to cryptocurrency in the given timeframe as well.
        <br/><br/>
        The Reddit comments dataset is collected using Google BigQuery, where SQL statements are used to trim 
        the data to the bare minimum needed. The data that was collected using SQL includes the attributes: 
        subreddit, body, score, author and created_utc. The resulting data from BigQuery is downloaded in CSV 
        format and imported into R. 
        <br/><br/>
        The cryptocurrency price history is obtained from Yahoo finance. After obtaining the price history data, 
        the price was converted to a nominal value. To convert to nominal data, we compared current price to 
        the day before. If the price increases, then the attribute increase is set to “yes” and vise versa for a 
        decrease in prices. The price data was converted into nominal data for calculating Naive Bayes. For days where there 
        is an increase in value of Ethereum, we will only be able to see if there was an increase or a decrease which 
        will make the analysis easier.
        <br/><br/>
        After the data is preprocessed, we perform sentiment analysis on the data to convert the comments to 
        specific moods. Sentiment Analysis is done using R with the following libraries from R: tidyverse, 
        tidytext, glue, and stringr. We are able to identify what words have a bigger influence in a positive 
        or negative Ethereum price, as it will be explained more in depth throughout the paper.
        <br/><br/>
        When doing sentiment analysis, we will focus on total positive comments by adding up the total positive 
        sentiment for each day and subtract total negative sentiment. PosMinusNeg is the resulting attribute from 
        this calculation which we use. We then create a Naive Bayes model to make predictions on cryptocurrency value. 
        We use positive minus negative as the attribute used to predict if there was an increase in the price of the cryptocurrency. 
        <br/><br/>
        To determine whether there is a relation between positive Reddit comments and Ethereum closing value, the Granger 
        Causality test is run. The Granger test is run with three attributes: day, close, and PosMinusNeg, where day is a 
        list of numbers from 1 to 93, close is the closing price of Ethereum, and PosMinusNeg is the total positive comments 
        from the sentiment analysis minus the total negative comments per day.
        <br/><br/>
        We determine the accuracy of our model by using a different time frame and predicting the prices of Ethereum in those 
        time frames based on Reddit comments. We compare the predictions to the actual price of Ethereum, and the results are used 
        to determine the accuracy of our model.
        <br/><br/>
        <h2>Experiments Results</h2>
        Over the course of the study, 108,147 comments from Reddit were collected. These comments were specifically selected from 
        the Cryptocurrency subreddit. The time frame of the collected data is from May 2017 to July 2017. The time period was selected 
        because it was the first appreciable spike and drop in Ethereum value. The data was collected from Google BigQuery using an SQL statement.
        <br/><br/>
        In this section, we show the results of our sentiment analysis, and the results obtained from our prediction model. Then we compare 
        them to the actual prices of Ethereum in the same time frame that we predicted. Based on the predicted outcome, we calculate the ability 
        our model has to predict an increase in Ethereum value.
        <br/><br/>
        <h2>Sentiment Analysis</h2>
        Figure 1 shows our initial results from sentiment analysis. In Figure 1, we show total positive comments for each day and in figure 2 
        is the closing value of Ethereum for each day from May 1st to July 31st. In figure 1, we can see a general trend in the positive direction 
        as the Ethereum price spikes as does total positive comments. From figures 1 and 2, we can determine if there is enough of a relation to warrant 
        additional investigation.
        <br/><br/>
        <ImgDiv>
          <FigWrap>
            <ImageWrapper src={require("../Data/positiveComments.png")} alt="duck"/>
            <FigTextWrap>Figure 1: Total positive comments over time</FigTextWrap>
          </FigWrap>
          <FigWrap>
            <ImageWrapper src={require("../Data/EthVTime.png")} alt="duck"/>
            <FigTextWrap>Figure 2: Ethereum value in Dollars over time</FigTextWrap>
          </FigWrap>
        </ImgDiv>
        <br/><br/>
        <h2>Granger Causality</h2>
        To determine whether what we saw in figures 1 and 2 was actually a relation, we ran the Granger Causality test. The test was run using the forecast 
        libraries in R and the total positive comments were compared to the closing value of Ethereum. Figure 3 shows the Granger causality of total positive 
        comments causing Ethereum close value. The resulting value from the test is significant; however, we must test the reverse case. In figure 3, we check 
        whether Ethereum closing value Granger causes positive comments and we find an insignificant value. Thus we can conclude that total positive comments Granger 
        causes Ethereum closing values. We obtained the best results with a time lag of two to six days. In figures 1 and 3, we used a time lag of 3 days where Granger 
        Causality shows its best results.
        <br/><br/>
        <ImgDiv>
          <FigWrap>
            <ImageWrapper src={require("../Data/Fig3.png")} alt="duck"/>
            <FigTextWrap>
            Figure 3: Shows Granger Causality: positive comments causes <br/>
            Ethereum close price, time lag of 3 days.
            </FigTextWrap>
          </FigWrap>
          <FigWrap>
            <ImageWrapper  src={require("../Data/Fig4.png")} alt="duck"/>
            <FigTextWrap>
            Figure 4: Shows Granger Causality: Ethereum close price <br/>
            causing positive comments, time lag of 3 days
            </FigTextWrap>
          </FigWrap>
        </ImgDiv>
        <br/><br/>
        <h2>Naive Bayes</h2>
        To determine whether our hypothesis was correct or not, the Naive Bayes classifier was used to predict if there was an increase in the prices of Ethereum 
        based on our sentiment analysis. The first attribute that was used to classify was positive minus negative as this attribute indicated the total amount of
         positive and negative comments for one day and adds them together. As can be seen in Figure 6 below, this attribute is not very good at predicting the 
         price of ethereum. One thing that was noticed is the attribute is better at predicting if there will be an increase on the price of ethereum than to 
         predict if there will be a decrease. Like it is shown in Figure 5, we ran the model to predict whether the price of Ethereum would go up or down, 
         and we found out that when predicting a decrease the model can predict 40% of the values correctly. On the other hand, when predicting if there will 
         be an increase, the model is correct at predicting 71.74% of values.
         <ImgDiv>
          <FigWrap>
            <ImageWrapper src={require("../Data/fig5.png")} alt="duck"/>
            <FigTextWrap>
            Fig 5 Naive Bayes results of predicting if there will be an increase, <br/>
            predicted results and actual results
            </FigTextWrap>
          </FigWrap>
          <FigWrap>
            <ImageWrapper  src={require("../Data/fig6.png")} alt="duck"/>
            <FigTextWrap>
            Figure 6. Naive Bayes plot with total positive minus negative <br/>
            comments where yes is an increase in Ethereum value
            </FigTextWrap>
          </FigWrap>
        </ImgDiv>
        <br/><br/>
        <h2>Conclusion</h2>
        We used other sentiments to try and see if they would be better at predicting the fluctuations in the price of Ethereum, but we did not find one 
        that was significantly better than positive minus negative comments. The sentiments we tried were very similar and definitely not the best at 
        predicting the increase or decrease on the price of the cryptocurrency.
        <br/><br/>
        In our study, we analyzed the sentiments of Reddit comments. We then analyzed whether these sentiments have any correlation with the stock 
        price of Ethereum. Our study reveals that there is a correlation between the Reddit comments and price of Ethereum. We concluded the 
        correlation by comparing the graphs from sentiment analysis with the graph showing price changes of Ethereum over the same period of time. 
        To prove the relational trend in the graphs, we used the Granger causality test, which showed that positive comments Granger cause closing value.
        <br/><br/>
      </DWrap>
    </TextWrapper>
  )
}

export default ProjectOne
