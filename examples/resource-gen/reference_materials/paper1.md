Please check the examination details below before entering your candidate information Candidate surname Other names Centre Number Learner ID LL-
T Level Technical Qualification in Digital Software Development (Level 3)
Specimen Assessment Material for first teaching September 2025
Paper reference XXXXX/XX


**Time** 2 hours 15 minutes 
Core: Examination PAPER 1
You do not need any other materials. Total Marks


## **Instructions** 

- Use  **black** ink or ball-point pen  

   - _a pencil may be used for drawings._ 

- **Fill in the boxes** at the top of this page with your name,   centre number and Pearson learner ID. 

- There are two sections in this question paper. Answer  **all** questions in Section A  and Section B. 

- Answer the questions in the spaces provided   

   - _there may be more space than you need_ . 

- Questions that require coded answers must be answered in Python 3.10 or later. 

## **Information** 

- The total mark for this paper is 90. 

- The marks for  **each** question are shown in brackets  

   - _use this as a guide as to how much time to spend on each question_ . 

## **Advice** 

- Read each question carefully before you start to answer it. 

- Try to answer every question. 

- Check your answers if you have time at the end. 
## SECTION A
Answer ALL questions. Write your answers in the spaces provided.
1  Give the name of the arithmetic operator that returns the remainder after division.
(Total for Question 1 = 1 mark)
2  Give the name of the flowchart symbol in  Figure 1 .
Figure 1
(Total for Question 2 = 1 mark)
3  Give  one  approach to root cause analysis.
(Total for Question 3 = 1 mark)
## **4** Explain **one** way that age might impact a person’s ability to access a digital system. 


**(Total for Question 4 = 2 marks)**
5 Modularisation is one approach to solving problems.


## Explain **one other** approach to solving problems. 

## 


**(Total for Question 5 = 2 marks)**


6 (a) Explain one benefit of acceptance testing.


(b) Explain one role of interface testing in system development.


**(Total for Question 6 = 4 marks)**
7 One task of abstraction is to identify information that is needed.


- Explain **two other** tasks performed in the process of abstraction. 


**(Total for Question 7 = 4 marks)**


## **8** Describe the process of a bubble sort. 


-  

-  

**(Total for Question 8 = 4 marks)**


## **9** Variables are managed by scope. 
Explain one type of scope.


**(Total for Question 9 = 2 marks)**
- **10** Explain with additional justification **one** impact on consumers of using rare earth metals in digital devices. 


**(Total for Question 10 = 3 marks)**


## **11 Figure 2** shows some data held about users. 
index userID lastName firstName


|**index**|**userID**|**lastName**|**firstName**|
|---|---|---|---|
|||||
|0|92338443|Wood|Philipa|
|1|178101|Aldrin|Delores|
|2|8299364|Carter|Eshal|


## **Figure 2** 

The data about users is held in a file. As part of a system update, all userIDs are going to be regenerated. 

A program is needed for this task. 

The program has the following requirements: 

- load information from an external file 

- generate new userIDs for every user 

- update the list of users 

- keep the list of users sorted by userID 

- save the information back to the external file. 

- The program will use a random number library to generate each new userID. 

Discuss how the use of random numbers for the new userID could impact the execution time of the programmed solution. 


**(Total for Question 11 = 6 marks)** 

**TOTAL FOR SECTION A = 30 MARKS** 
## **SECTION B** 

## **Answer ALL questions. Write your answers in the spaces provided.** 

- **12** Physical assets are held in an office building. A programmer is going to write an algorithm to process the data about the assets. 

   - (a) Give **one** justification for addressing the quality of work produced by employees in a code of conduct. 

**(1)** 


(b) **Figure 3** shows data about some of the assets held in the office building. 
tag type price owner


|**tag**|**type**|**price**|**owner**|
|---|---|---|---|
|||||
|598349LL|Laptop|248.99|500771|
|544653DD|Desktop|321.63|500771|
|737997TT|Television|287.34|958253|
|660313LL|Laptop|237.78|495882|
|424956MM|Lamp|12.34|495882|


**Figure 3** 

**Figure 4** shows a partially completed algorithm. 
```python
1 index = 0
2 errorStatus = False
4 for index in range (0, 6):
5 if ((          )      (          )):
6 errorStatus = True
```


**Figure 4** 

The data recorded in the tag column in **Figure 3** must consist of six digits followed by two uppercase letters. 

Write the **three** parts of the code required for line 5 in **Figure 4** to test if the tag starts with six digits by providing the missing information in the boxes. 
if (( ) ( )):


## (c) **Figure 5** shows part of an algorithm that displays asset sizes on the screen. 
```python
1 if ((inNum <= 10) and (inNum >= 0)):
2 print ("Small")
3 elif ((inNum > 20) or (inNum < 30)):
4 print ("Medium")
5 else:
6 print ("Large")
```
*Figure 5*


- (i) Identify the first test in the sequence of processing when the input is 80 to the algorithm in **Figure 5** . 
-   (ii) Identify the second test in the sequence of processing when the input is 80 to the algorithm in **Figure 5** . 

## (d) **Figure 6** shows an algorithm to convert asset owner numbers to integers. 
```python
1 ownerNum = 0
3 ownerNum = int (input ("Enter an owner number: "))
5 while (ownerNum != 0):
6 ownerNum = int (ownerNum / 100)
7 print (ownerNum)
8 ownerNum = int (input ("Enter an owner number: "))
```


**Figure 6** 
Explain the minimum number of times the loop must execute in Figure 6 .
**(Total for Question 12 = 8 marks)**
- **13** A shop sells clothes. It uses digital solutions to manage the business. 

   - The shop uses algorithms to express solutions to problems or processes. 

   - (a) Explain **one** benefit of representing algorithms as flowcharts prior to programming. 


Use this information to answer questions 13b(i), 13b(ii) and 13b(iii). 

The business uses sensors to monitor the location of items. 

An algorithm processes the sensor data collected in a comma-separated value text file for later use. The data includes: 

- a sensor tag 

- a sensor reading 

- a sensor confidence score. 

**Figure 7** shows the contents of the output file for the sensor data. 
```
1 XQ255H,3885,0.27
2 DW237M,4605,0.48
3 WJ165T,7090,0.27
4 EH847J,2742,0.55
5 MG507W,3107,0.61
```


**Figure 7** 

**Figure 8** shows an attempt at writing the algorithm for processing sensor data. 
```python
1 OUTFILE = "Sensors.txt"
2 LF = "\n"
4 sensorTags = ["XQ255H","DW237M","WJ165T","EH847J","MG507W"]
5 sensorReading = [3885, 4605, 7090, 2742, 3107]
6 sensorScore = [0.27, 0.48, 0.27, 0.55]
7 index = 0
9 theFile = open (OUTFILE, "w")             # Open for writing
11 for sensor in sensorTags:
13 # Create a comma separated value output record
14 outString = ""
15 outString = outString + sensor + ","
16 outString = outString + str (sensorReading[index]) + ","
17 outString = outString + str (sensorScore[index]) + ","
19 index = index + 1
21 if (index < len (sensorTags)):
22 outString = outString
24 theFile.write (outString)               # Write the line
26 theFile.close ()
```


**Figure 8** 

(b) There are errors on line 6, line 17 and line 22 of the algorithm in Figure 8 .
(i) Write the correct line of code for line 6.

(ii) Write the correct line of code for line 17.


(iii) Write the correct line of code for line 22.


- (c) An algorithm is required to determine if items in the shop are being sold at a profit or a loss. 

   - The shop owner pays a wholesale price to the manufacturer. 

   - The shopper pays a retail price to the shop owner. 

   - The algorithm must meet these requirements: 

   - allow the user to enter the wholesale price 

   - allow the user to enter the retail price 

   - inform the user which, if any, inputs are invalid 

   - determine the difference between the retail price and the wholesale price 

   - determine if there is a profit or loss 

   - inform the user of the profit or loss status and the value. 

   - Draw a flowchart of the algorithm to meet these requirements. 

**(6)** 

**(Total for Question 13 = 11 marks)** 

**14** A programmer is employed by a software company. 

- (a) The programmer is developing a test plan for a program. 

**Figure 9** shows a partially completed diagram outlining the last two steps of a test plan. 
Complete the diagram to include the first three steps of creating a test plan.

Step 1 Step 2 Step 3 Describe expected results Step 4 Record actual results Step 5


**Figure 9** 

## (b) The company has different departments. 

A program displays the number of temporary and permanent employees in each department. 

## **Figure 10** shows the output of the program. 
Department Temporary Permanent employees employees


|Department|Temporary
employees|Permanent
employees|
|---|---|---|
||||
|Human resources|2|41|
|Programming|12|38|
|Health and safety|2|16|
|Diversity and Inclusion|1|11|
|Security|2|42|
|Legal|0|7|


**Figure 10** 

Explain the programming action required to process all of the departments in **Figure 10** . 

**(2)** 


- (c) The software company has an Acceptable Use Policy (AUP) with these four sections only: 

   1. Permitted use of physical resources, covering office space and computing devices 

   2. Working practices, covering code style and language usages 

   3. Communication etiquette, covering presentations and emails 

   4. Prohibited use of patented intellectual property belonging to other organisations. 

All employees must sign the AUP when they join the company. 

A software engineer, employed by the company, has been staying late in the office every night this year. The engineer is writing a mobile phone app to sell privately on mobile app stores. 

A manager has identified, using a staff monitoring system, that the engineer has also incorporated a small section of code, developed for the organisation’s products, in the phone app they are selling privately. 

Evaluate the suitability of this AUP in preventing the software engineer using the company’s code. 

**(9)** 


**(Total for Question 14 = 14 marks)** 

**15** Rainbow Products is a company that creates custom software. 

- (a) **Figure 11** shows part of a merge sort algorithm used by the company in a new software application. 
```python
1 left = [10, 20, 30, 40, 50]
2 right = [5, 15, 25, 35, 45, 55, 65, 75]
3 result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
5 indexLeft = 0
6 indexRight = 0
7 indexResult = 0
9 # --------------------------------------------------------
10 # Merge until one array runs out
11 while indexLeft < len (left) and indexRight < len (right):
12 if left[indexLeft] <= right[indexRight]:
13 result[indexResult] = left[indexLeft]
14 indexLeft = indexLeft + 1
15 else:
16 result[indexResult] = right[indexRight]
17 indexRight = indexRight + 1
18 indexResult = indexResult + 1
```


## **Figure 11** 
Write code to copy any remaining items in the left array to the result array shown in Figure 11 .
## **PLEASE WRITE YOUR RESPONSE IN THE BOX ON THE NEXT PAGE** 

**25** 

- (b) Rainbow Products is considering installing a new digital system that monitors the activities of the programmers. 

The system includes software that runs in the background on the programmers’ computers and tracks all interactivity. 

The system also includes software that tracks website activity. 

Programmers often need to access websites for research and investigation as part of their role. 

The offices will also have video cameras that record all activities. 

The company will set parameters within which employees must work in relation to the monitoring system. The parameters include: 

- a maximum time limit on accessing social media 

- the amount of code they are required to produce within a time frame. 

The company will provide incentives for employees that work within the set parameters. 

The company loses a large number of programmers each year, which are replaced. 

Evaluate the suitability of using this monitoring system to drive productivity. 

**(9)** 


**(Total for Question 15 = 15 marks)** 

Use this information to answer Question 16. 

A puzzle company has a flat file of words. To produce the puzzles, the programmers need to create a program to load the flat file. 

The program must output: 

- the location in the list of a single inputted word 

- a list containing all the words starting with specific letters 

- a list of all words with a specific length. 

**Figure 12** shows characteristics of the flat file. 
Items 40 000 Format 1 word on each line
*Figure 12*


All the words from the file are stored in the program in a list named the_words. 

A linear search algorithm is used to implement each of the searches. 

The company has created two programs for the searches of a single word and is considering which to use. The algorithms for the other two searches are similar, with different tests for the search. 

**Figure 13** shows the code for the single-word searches. 


*Program 1*

```python
target = input ("Enter a word: ")
found = False
for index in range (length):
if (the_words[index] == target):
print ("Target found at: " + str (index))
found = True
if (not found):
print ("Target not in the file")
```


*Program 2*

```python
target = input ("Enter a word: ")
found = False
index = 0
while ((index < length) and (not found)):
if (the_words[index] == target):
print ("Target found at: " + str (index))
found = True
index = index + 1
if (not found):
print ("Target not in the file")
```


## **Figure 13** 

**16** Evaluate Program 1 and Program 2 in terms of their suitability for executing the three searches in this data. 


**(Total for Question 16 = 12 marks)** 

**TOTAL FOR SECTION B = 60 MARKS TOTAL FOR PAPER = 90 MARKS** 

## **Copyright and Acknowledgements** 

Copyright in this document belongs to, and is used under licence from, the Institute for Apprenticeships and Technical Education, © 2025. 

‘T-LEVELS’ is a registered trade mark of the Department for Education. 

‘T Level’ is a registered trade mark of the Institute for Apprenticeships and Technical Education. 

‘Institute for Apprenticeships & Technical Education’ and logo are registered trade marks of the Institute for Apprenticeships and Technical Education. 

The T Level Technical Qualification is a qualification approved and managed by the Institute for Apprenticeships and Technical Education. 

Pearson Education Limited is authorised by the Institute for Apprenticeships and Technical Education to develop and deliver this Technical Qualification. 

Pearson and logo are registered trade marks of Pearson.
