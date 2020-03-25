/* eslint-disable no-undef */
import React from 'react';
import { PermissionsAndroid } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import { AppConsumer } from '../../AppContext';

export default class PrintPdf extends React.Component {
  // static contextType = AppConsumer;
  static askPermission = async (filename, ShowToast) => {
    try {
      // const monthNames = [
      //   'Jan',
      //   'Feb',
      //   'Mar',
      //   'Apr',
      //   'May',
      //   'Jun',
      //   'Jul',
      //   'Aug',
      //   'Sep',
      //   'Oct',
      //   'Nov',
      //   'Dec',
      // ];

      // const trandate = new Date(responce.transDate);

      // const transCurrentDate = trandate.getDate();
      // const transMonth = monthNames[trandate.getMonth()];
      // const transCurrentYear = trandate.getFullYear();
      // const transDate = `${transCurrentDate}-${transMonth}-${transCurrentYear}`;

      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      const pdfIcon =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAtCAYAAADcMyneAAAEHElEQVRYR+2Yf0yUdRjAPwccPwRCZCeECNYOky1i7XAE4ZZQVlCYgUrQwCLRo1Uw0XAEGHJygkgcgWjpqC3YLFtEA5pRAqanaKxwRCtKFMqsGay7a9wRb8MZm4Pj7jg8W7v33+/73ffzfp7nfd7neUWCIAj8hy+RHdDK6NgNWimQ/5lBQc/FT2uoeLeTgZEx8+WIxHjH76BGHsVCkcj8fWChwf5GNhd2ECzPYv0yT7MOcrh8nKLyVnSOAh5xO9i/OdIiSItCrG3bw9NfSDmiXM8Sc00MNPFCgZrEbZF0lNXz2+M7UaWH427mfosBEzulHFZYDph6SMGq4WZ2FL6DLqGIipT7zIK0KeBqDwd0vQ28pmhiPLGI0qQQk5A2B5xMXN1X9WxXtCJ+TkH5E1LEs2TzbQGc5NGeeZucvcfx3qKg5FHjkLcNcBJytKuWV944RcCLCopigmY0aRPAzG3vc0eUjADn6TXwj75Ozl5xY42ilpxQr2nBvvWAukHaG5ro1UzMnGmCnsvn1GhTKqmLDzIfUHttmKuj+ps2GNRvkXPWn6KX4pCYqmMiMQu8Jfh6ucxe0Ce0fJafwQfRe80HvFCXS37ztxis7GUFJ29k2XsoiZluZop6LoClG9JwLaieMSfM+r7duOnqsXzSzofNXtjnAlicLCeo/E3SlzpawjPtXsPnFSS0LKKubBNBDkaaBKsBf+7m49OX0E/mlP+9REXchUbdgnr4L3BxJyAsmgcCPTH8cIrWr39BLwgIbr6sfCSaJSf32wCwS0XS0VFSYoLoa2vlz41K1n2Zx2G3dawNuEJ7ax/3F1fy2LkSsrp9SH8wmAkXCeEPRbDYVoBPdQRSIw+nv7aQhhW5bOpX0hZbjSLKix8PZlPimYnS5T3kvVKyY6U4SZYTucIX24S4S8XayjP4+S5iwTIZaVueYaw6k+ZY1XXAocbtvKp/lkqPo2SdcCUmxAfHe1bzfGwI2CQHu1QknAyhMe/hqc5DvTudDyOKyQ/V8tG+MgaTq9h6qQz5yAaOZYRNvSy2MdjTSO43wbyeJpsCvHBkJwd7NDi7eCBZlcjWBBmcOEC5bg2KeKmNAa0oNLfO4MYM/EoPkXm3tXWwlIQWv/mvg+0FaaguuhG40NkKf6D5dQh9/C7q08OMN6VzKdSMjfBddw8/aW4eLfU9n1DzvTepSVEsNvZluPFIgkiM+53LkYUGzN7WzwnQiLfJqc7ioclUDOyApgyZWrcbNGXI1Pp8GuT8AZKrBklV7uJJf1dTR5u3Pnya3XkqhJfrKFxp5dDE3yOoqwopbR9g3MkJsam5xBSiYEA/7oRPbCbKnLgZ//dYNNX9e57h2jBDv2vQW/v7XeR8fbBaKvEw+ihzAjQlZj7X7YDW2rQbtBu01oC1+/8BfC/cmIONTjAAAAAASUVORK5CYII=';
      const strategyIcon =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAqCAYAAABLGYAnAAAFNElEQVRYR+2XezTWdxzHX4+wNexRdJGkWmnp5kTrenQZnanFWem6k9hSbrVyKUVEktQWFZoVXU63o9q0kyx0OnZKc7LTqulCF4eO3BblMZ4Hvx2Gh4TnQevsnH7/fr/f3+v7eX8/V5EgCAJv6RO9g78N5f9/sksyk4iIPMbVp5Voj/0U5zWOTNJVUVo85SwXpJQ9ucEBv2/JmvAVrlPF3Io7yGlhOqGetozoo4WaEldQGF7222ECw89yt7SGam1TNkUHMFNTBe6dZLXncXJra1E1MGWljw/Wg95X6AqKwcv/IMQxkJy53vjOHYZYUxtNNVETQCqRUPGyiIzDIex6MYtD2xeiL5Kvt3WTVvCiyxGEHErhoaS26Ywgk1GlPpBlEZHYDejRplWyX8NZFnKJClVV1JrBVfuNYYmXF7bDPmxxthX8u6W2ZFuuYaWJVtNGkVDBjdhwElVMsbEwptdrrBJV5HH1fBIPx9jhMXtQ09uLBBnPLsUQXmXFMX8b+jQ72woeuMiO3kGxuBn9a6Gk4AmFKroYqOWTdPwMqY/yKZe2zsjq72miazYPu/mT0VdvKbkkMRjbZD0OhNpjqCJfaxs+5BkpO7exNy0XGar0nuPOHhfzFjdXyKvqDFAWvrpgP4sPFrNqhw8WlZfx3XwUbd9YvEf3VJTZtE9puMOj7dgm9GNvmCPDqx8S4byJfKdDBE0Qv3m4m3Y6Qe67ydQxZnj1E25IR+G3ewMTxe1kstJMfkrMx+SLaQgpJ7jS3xqH8TrKy17vcMWZpCSkka1qyNS5sxjdCJbJQO01uaw0k4iNfqRKtagpV2emXyiuY8SdhL8qsCDl6S8RBERfp+d8LwK+NEW7edjVrZ8LwCXmJn8Pt2LPdhdGaah0A7xWwp1ofwJ+voukofnRNF9FqLsNgxtDK/ci693j6OuwDJ2LMVz5xJcTy427AV5Tyu8/nqNkqB5pISfRdnOif1YxJss/x0i9wQ8EKeUVoKmhDoIUmUi9Ptko7e2NSaaVa8tyiHbyJHPxbsJmGyrk+Z2CS0tLkYnFaAgVFJRI6denVz2s6GIwzjE5THXfjNtkww7LqPLwYZWk+q8kvGYG9r1vE/VgKDsOrGOcigrUSngcH0HgkVSe6wxm5MD+aOsOZKz5LCzGyfN6oyzKw+tCrTCNbWt3cK1Ci+lbI/Ee/0qCeZHD9asZ3M8roPTZI9IzshDN8WK/45QWUdAp+ONTm/E6W8IAcSHZOtaEbVshd67XvHb1/Xi+8Y3HeOcPuA6Vl95OwfOuHOe2wTysdAtIvlbCyM8mtt8kVBeREBTM46XBuI6Q14BOwRVy5eabBCm5N29SbTSBIRry0vnfwKuLSA6L4vkCHxYO6aLsSlvexoEuW17X20XkT8TdUpWj+xL4yGUjVnrN+rnKIq4fiyHuVh6qIy34eoU1Rg3Sdxkue5DAli0HuVdVC2b2hG1oltMFKXf2r2PTn3ossh7Hy6RTJPZ14Ki3RX3IdRlOQ7m8kFuBhuV6wtZZyD1f9pQ49/WkL4hk1wxdyIhiYXgZG2M3YNajG6pa4fkA1qQPYuuSAZyJuoCBxx7sG2NZkJKx0wX/YhM8lpjxMv57InvYNHWrXbe8I+8ry+L8vkhO33qK2sfmOK11aZrflIJrBsXi3tA6d8RUZF2SGIhtskHHrXO8x2JiyvQx0ZcPDYoA2twjyPgr+y750zw54jwFjfaGBsqyuHwplXtFVV1iyscdNT4wHI2lxaRWw4Rig2L3XKPVX97B35Cw7f/2rcr+D7kPGLB5FP7tAAAAAElFTkSuQmCC';
      const loginIcon =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAsCAYAAAAJpsrIAAACoElEQVRYR+2YzUtiURjGH1NDBKFBIwgMdBPSQkQXzSYJCdEBN6Iu3PQPagsVGtvIiJItMmghKqIVTKI5CqKWXHR4LwiNo9d71Csycw/Iuej5+Pm8577nOUfBcdwYW1gUMhhjVGTFGAWDrNhGFfv4+ADHcUxzarVaKBSKhX2WCmW73UY6/QOt1q+FE0w3UCqVsFgssNvt2NnZmdufGYxUurq6wuHhIaxWK9RqNRNcq9VCJpPB8fExbDbb+sCq1SpyuRyCwaDgPxaiLZfLuL+/RygUWh/Y4+MjXl5e4PV6mZT63LjRaCCRSODy8nLuemMO5TrAms0m4vH4fwL29PSE19efOD39unQoJVHsM02xWOTfSrPZzAQpOVitVkMqlYLT6YTJZBINJzkYkZRKJWSzWbhcLhiNRlFwGwEjkkKhgLu7O1xcXPCJd1HZGBiBUBrJ5/Nwu904ODgQZNsoGJE8PDzwgB6PBwaDYS7cSmCRSAS9Xo/PzBM3MKue/q7f72N3dxeBQICvZ5WVwGizfX9/58cdj8f8Z1Imz9M1tad99OjoCOfn59IotmgBT/9OkMnkd5D78Hq/QaVSbQfYbe4WtWoNPp8PZAaFykqhZFGMdgAKITkOoUU/GXMjYPV6HdfX1zg7OxO9NUkO1u12EYvFeKss5Ean1ZccjLYiWuxCb+Da04WYNTYajf7Ic2L6UBtJFOt0OqBTEoub2EgoZWvNej+2tYqRMSQ4v98vdq3/1e75+RnpdBrhcHjuGMzHN8pd0WgUDocDJycnzHCDwQA3N0ns7X3hk/K8wgxGA1UqFf6YT/cQ86zNrAlpoydbpNfreber0WjWC0aj9Qd9vDXfMBwORatG3k2n02F/f3/hjc9SiokmWaGhDMYqnqzYP6PYb1wyKw8GG220AAAAAElFTkSuQmCC';
      const paperPlanIcon =
        'data:image/png;base64,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';
      const iconMoney2India =
        'data:image/png;base64,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';
      const base64Image =
        'data:image/png;base64,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';
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        let Htmlpart;
        if (
          filename === 'highValueViewReciept' ||
          filename === 'highValueReciept' ||
          filename === 'highValueRecieptConfirm'
        ) {
          Htmlpart = `<html>
          <head>
            <style>
              .headingFollowSteps {
                color: #e77817;
        
                font-size: 24px;
                font-weight: bold;
              }
              .divStepsDecscriptions {
                margin-top: 10px;
                margin-left: 30px;
              }
              .StepsDesciptionText {
                width: 30;
                color: #4a4a4a;
        
                font-size: 16px;
              }
              .Steps2div {
                padding-top: 4px;
        
                width: 400;
              }
              .Stepsdiv {
                padding-top: 4px;
        
                width: 400;
              }
        
              .pleaseNote {
                border-color: transparent;
                border-width: 1px;
                border-bottom-color: #d4d4d4;
                border-style: solid;
        
               
               
              }
        
              .pleaseNoteBoxMobile {
                /* background-color: '#FCF2EC'; */
                width: '50%';
                padding: 2px;
        
                margin-top: 4px;
              }
        
              .pleaseNoteBox {
                margin-left: 30px;
                background-color: #FFC5FC;
                opacity: 0.8;
                float: left;
                height: 210;
                width: 300;
              }
        
              .textPleaseNote {
                padding: 5;
                margin: 0;
                font-size: 16px;
                color: #4a4a4a;
              }
        
              .stepsAndNoteMobile {
              }
        
              .stepsAndNote {
                margin-top: 20px;
                background-color: green;
              }
        
              .kindlyNoteBox {
                width: 790;
                clear: both;
                background-color: #f4f4f4;
                padding-left: 30;
                padding-top: 10;
                padding-right: 10;
                padding-bottom: 10;
              }
              .KindlyNoteText {
                color: #4a4a4a;
                font-size: 16px;
                font-weight: bold;
             
              }
        
              .kindlyNoteTexts {
                margin: 0;
                font-size: 14px;
                padding: 0;
                color: #4a4a4a;
            
              }
              li {
               
            text-indent: -1.28571429em;
              }
            </style>
          </head>
          <body>
            <div>
              <div>
                <img src="${iconMoney2India}">
              </div>
              <div>
                <p class="headingFollowSteps">
                  Follow the steps below to complete your transfer
                </p>
              </div>
        
              <div class="stepsAndNote" }>
                <div style="float: left;">
                  <div class="Stepsdiv">
                     <div style="float: left;">
                      <img
                      src = "${pdfIcon}"
                        style="background-color: tomato; width: 30px; height: 30px;"
                      />
                      <!--
                      <Icon name='cancel' size{10} color='#9b9b9b' />
                      -->
                      </div> 
                    <div>
                      <label class="headingFollowSteps">Step 1</label>
                      <br />
                      <div class="divStepsDecscriptions">
                        <label class="StepsDesciptionText">
                          Print the PDF to execute the transaction. It contains a
                          pre-filled form with instructions for wire transfer.
                        </label>
                      </div>
                    </div>
                  </div>
        
                  <div class="Steps2div">
                    <div style="float: left;">
                      <img
                        src = "${strategyIcon}"
                        style="background-color: tomato; width: 30px; height: 30px;"
                      />
                      
                      <Icon name='cancel' size{10} color='#9b9b9b' />
                    </div>
                    <div>
                      <label class="headingFollowSteps">Step 2</label>
                      <div class="divStepsDecscriptions">
                        <label class="StepsDesciptionText">
                          Visit your local branch along with the print out and initiate
                          a wire transfer to ICICI Bank’s correspondent bank account.
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
        
                <div class="pleaseNoteBox">
                  <div class="pleaseNote">
                    <p class="textPleaseNote">Please Note</p>
                  </div>
                  <div>
                    <p class="textPleaseNote">
                      Please ensure that the tracking number for this transaction,
                      M2A12321232 is mentioned in the “payment reference/additional
                      information/payment details for beneficiary’s bank” field. This is
                      critical for the beneficiary to get appropriate credit into his
                      account.
                    </p>
                  </div>
                </div>
              </div>
              <div style="
            clear: both;
            padding: 20px;
        "></div>
        
              <div class="kindlyNoteBox">
                <label class="KindlyNoteText">Kindly Note:</label>
                <br />
            
                <li class="kindlyNoteTexts">
                  Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod
                  in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat
                </li>
             
                <li class="kindlyNoteTexts">
                  Praesent dapibus, neque id cursus faucibus, tortor neque egestas
                  augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui
                  mi
                </li>
           
                <li class="kindlyNoteTexts">
                  incidunt quis, accumsan porttitor, facilisis luctus, metus.\n'
                </lable>
             
                <li class="kindlyNoteTexts">
                  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec
                  consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
                  gravida non, commodo a, sodales sit amet, nisi
                </lable>
          
                <li class="kindlyNoteTexts">
                  Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
                  ultrices ut, elementum vulputate, nunc
                </lable>
             
                <li class="kindlyNoteTexts">
                  Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis
                  vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo
                  ullamcorper mage
                </li>
         
              </div>
            </div>
          </body>
        </html>
        
        `;
        } else if (
          filename === 'netExpress' ||
          filename === 'confirmNetExpress'
        ) {
          Htmlpart = `<html>
          <head>
            <style>
              .divHeadingFollowSteps {
                width: 500px;
                text-align: center;
                margin-left: 130px;
                margin-bottom: 20;
              }
            .headingFollowSteps {
        
              color: #E77817;
              font-size: 24px;
              font-weight: 'bold';
            }
            .textStep1Step2 {
              margin-left: 10px;
              color: #E77817;
              font-size: 24px;
              font-weight: bold;
            }
            .tranDetail {
              margin-left: 35px;
              margin-top: 30px;
        
            }
        
            .steptranDetail {
              padding-left: 40px;
              margin-top: 1px;
              margin-bottom: 20;
            }
        
            .transAmount {
              margin-left: 205px;
              font-weight: bold;
              margin-bottom: 10px;
            }
            .acountName {
              margin-left: 220px;
              font-weight: bold;
              margin-bottom: 10px;
        
            }
        
            .recipientBank {
              margin-left: 130px;
              font-weight: bold;
              margin-bottom: 10px;
        
            }
        
            .accountNumber {
              margin-left: 200px;
              font-weight: bold;
              margin-bottom: 10px;
        
            }
        
            .divPost {
              background-color: lightcoral;
              width: 750;
              height: 50;
              text-align: center;
              justify-content: center;
              align-items: center;
              margin-top: 30;
              margin-left: 40px;
        
            }
        
            .textPostPara  {
              padding:15px;
        
            }
            .textKindlyNote {
        
              color: #4A4A4A;
              font-size: 16;
              font-weight: bold;
            }
        
            .divKindlyNote { 
           
              background-color: #F4F4F4;
              width: 750;
              margin-top: 30px;
              margin-left: 40px;
              padding: 20px;
            }
            .textKindlyNotePara {
              color: #4A4A4A;
              font-size: 14;
            }
        
            .divKindNotePara {
              padding-top: 5px;
            }
            </style>
            <body>
              <div>
              <img src="${iconMoney2India}">
            </div>
              <div class="divHeadingFollowSteps">
                <h1 class="headingFollowSteps">
                  Follow the steps below to complete your transfer to Ramesh Bhartee
                </h1>
              </div>
             
               <div style="float: left;" >
                <img src="${loginIcon}" width="40px" height="40px";>
        
              </div>
             <div>
                <label class="textStep1Step2">Step1</label>
              </div>
        
              <div class="steptranDetail">
                <label >
                  Login to your banks internet banking. Go to funds transfer and select
                  your account number 87675654 to send funds.
                </label>
              </div>
            </div>
             <div style="float: left;" >
              <img src="${paperPlanIcon}" width="40px" height="40px";>
            </div>
           <div>
              <label class="textStep1Step2">Step2</label>
            </div>
        
              <div class="steptranDetail">
                <label >
                  Login to your banks internet banking. Go to funds transfer and select
                  your account number 87675654 to send funds.
                </label>
              </div>
              <div>
              <label class="tranDetail">Transfer Amount:<label>  <label class="transAmount">	2,100.38 AUD</label>
              <br/>
              <br/>
              <label class="tranDetail">Account Name:	</label> <label class="acountName">	ICICI Bank Limited</label class="tranDetailBold">
              <br/>
              <br/>
              <label class="tranDetail"> Recipient Bank BSB number:	</label> <label class="recipientBank"> 037863</label class="tranDetailBold">
              <br/>
              <br/>
              <label class="tranDetail"> Account Number  :	</label> <label class="accountNumber"> 15040966 </label> 
              </div>
        
            <div class="divPost">
                <p class="textPostPara">Post online transfer, Ramesh Bharatee will be credited within 1-3 working days.</p>
            </div>
        
            <div class="divKindlyNote">
              <div>
                <label class="textKindlyNote">Kindly note:</label><br/>
        
              </div>
              <div class="divKindNotePara">
                <label class="textKindlyNotePara">The Tracking number M2N45678989 is unique and is valid only for this transaction. DO NOT PRECEDE the Tracking Number with any other comment. In ase the Tracking number is missing or incorrectly provided in your transfer payment details, your funds may get rejected or processing may get delayed. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </label>
              </div>
                  
            </div>
            </body>
          </head>
        </html>
        `;
        }
        const options = {
          html: Htmlpart,
          // Content to print
          // html: `<html> <head> <style> .fullContainer { background-color:white; margin-left: 20; margin-right: 20; width: 90%; } .header { background-color: green; height: 50; width: 100%; } .secondContainer { width: 100%; height: 100; } .divCommonFirstRow { width: 200; padding: 2; margin: 2; } .divfirstRowSecondContainer { display: flex; flex-direction: row; } .senderRecieverContainer{ height: 330; margin-top: 20; display: flex; flex-direction: row; } .senderContainer{ width: 45%; margin-right: 5%; } .divbelowTexts { margin-top: 70; margin-right: 40; padding-bottom: 40; } .textscommonClass { font-size: 12; color: #9B9B9B; } .font16Label { font-size: 16; color: #4A4A4A; font-family: Arial, Helvetica, sans-serif; margin-bottom: 5; } .font16WithBoldLabel { font-size: 16; color: #4A4A4A; font-family: Arial, Helvetica, sans-serif; font-weight: bold; } .font24withorangebold { font-size: 24; color: orange; font-family: Arial, Helvetica, sans-serif; font-weight: bold; } .font18withboldLabel { font-size: 18; color: #4A4A4A; font-family: Arial, Helvetica, sans-serif; font-weight: bold; } .font18withorangebold { font-size: 18; color: orange; font-family: Arial, Helvetica, sans-serif; font-weight: bold; } label{ padding-top: 10; } </style> </head> <body > <div style='margin-bottom: 30; margin-left: 20;'> <img src='logo.png' alt='Logo' />  </div>   <div class='fullContainer' > <div class='secondContainer'> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Trans. Initiation Date:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'> ${transDate} </label> </div> <div class='divCommonFirstRow'> <label class='font16Label'> Purpose of Payment:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>Payment for Advertising</label> </div> </div> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Est. Delivery Date:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>${date}</label> </div> <div class='divCommonFirstRow'> <label class='font16Label'>Transfer Type:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'> Online</label> </div> </div> <div class='divfirstRowSecondContainer'> <div class='divCommonFirstRow'> <label class='font16Label'>Tracking Number:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>${responce.trackNo}</label> </div> <div class='divCommonFirstRow'> <label class='font16Label'> Exchange Rate:</label> </div> <div class='divCommonFirstRow'> <label class='font16WithBoldLabel'>${responce.exchrate}</label> </div> </div> </div> <div class='senderRecieverContainer'> <div class='senderContainer'> <div> <label class='font24withorangebold'>Sender</label> </div> <div> <label class='font16WithBoldLabel'>Sunil Lovevanshi</label> </div> <div> <label class='font16Label'>Prabha Building, 60 Feet Road</label> </div> <div> <label class='font16Label'>Ghatkopar East</label> </div> <div> <label class='font16Label'>Mumbai, Maharashtra</label> </div> <div> <label class='font16Label'>400077</label> </div> <div> <label class='font16Label'>Ph: 921026315</label> </div> <div style='margin-top: 20;'> <label class='font16WithBoldLabel'>${responce.remBankName}</label> </div> <div> <label class='font16WithBoldLabel'>${responce.RemAccountNumber}</label> </div> <div style='display: flex; flex-direction: row; margin-top: 30;'> <div style='width: 50%;'> <label class='font16Label'>Transfer Amount:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'>${responce.txnAmount}</label> </div> </div> <div style='display: flex; flex-direction: row;'> <div style='width: 50%;'> <label class='font16Label'>Transfer Fees:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'>+ 4.00 USD</label> </div> </div> <div style='display: flex; flex-direction: row; padding-top: 10; margin-top: 35; border-style: solid; border-width: 1; border-top-color:grey; border-bottom-color: transparent; border-right-color: transparent; border-left-color: transparent;'> <div style='width: 50%;'> <label class='font18withboldLabel'>Total Amount:</label> </div> <div style='width: 50%;'> <label class='font18withorangebold'>10,004.00 USD</label> </div> </div> </div> <div class='senderContainer'> <div> <label class='font24withorangebold'>Receiver</label> </div> <div> <label class='font16WithBoldLabel'>${responce.receName}</label> </div> <div> <label class='font16Label'>${responce.corrBankAddress}</label> </div> <div> <label class='font16Label'>Ghatkopar East</label> </div> <div> <label class='font16Label'>Mumbai, Maharashtra</label> </div> <div> <label class='font16Label'>400077</label> </div> <div> <label class='font16Label'>Ph: 921026315</label> </div> <div style='margin-top: 20;'> <label class='font16WithBoldLabel'>${responce.corrBankName}</label> </div> <div> <label class='font16WithBoldLabel'>${responce.corrBankaccNumber}</label> </div> <div style='display: flex; flex-direction: row; margin-top: 30;'> <div style='width: 50%;'> <label class='font16Label'>Converted Amount:</label> </div> <div style='width: 50%;'> <label class='font16WithBoldLabel'> ${responce.beneamount} INR</label> </div> </div> <div style='display: flex; flex-direction: row; padding-top: 10; margin-top: 35; border-style: solid; border-width: 1; border-top-color:grey; border-bottom-color: transparent; border-right-color: transparent; border-left-color: transparent;'> <div style='width: 50%;'> <label class='font18withboldLabel'>Total to Recipient*:</label> </div> <div style='width: 50%;'> <label class='font18withorangebold'>710,000.00 INR</label> </div> </div> </div> </div> <div class='divbelowTexts'> <p class='textscommonClass'>*Recipient may recieve less due to fees charged by recipients bank or foreign taxes.</p> <p class='textscommonClass'>You have a right to refute errors in your transaction. If you think there is an error, contact us withi 180 days at our toll free number at 1-866-424-2448 or write to us at nri@icicibank.com. You can also contact us for a written explanation of your rights.</p> <p class='textscommonClass'>You can cancel your payment for a full refund within 30 minutes after you authorize the transaction on our website, unless the funds have been picked up by or deposited into the account of the recipient. To cancel your transaction, please go to “My Transfers” page and click “Cancel Transaction” against the tracking number for the transaction. For Power Transfers, please see the additional information under the “Kindly Note” below.</p> <p class='textscommonClass'>For questions or complaints about ICICI Bank NY, contact: U.S. Consumer Financial Protection Bureau, Tel:855-411-2372 / 855-729-2372 (TTY/TDD), https://www.consumerfinance.gov/sending-money/</p> </div> </div> </html>`,
          fileName: filename,
          directory: 'M2I',
        };

        const file = await RNHTMLtoPDF.convert(options);
        if (
          filename === 'highValueViewReciept' ||
          filename === 'highValueRecieptConfirm' ||
          filename === 'confirmNetExpress'
        ) {
          // ShowToast({
          //   showToast: true,
          //   message: `Successfully saved in ${file.filePath}`,
          //   duration: 3000,
          //   align: 'center',
          //   top: 'top',
          // });
          alert(`Successfully saved in ${file.filePath}`);
        } else {
          return true;
        }
      }
      // alert('WRITE_EXTERNAL_STORAGE permission denied');
    } catch (err) {
      alert(`Write permission err${err}`);
    }
  };
}
