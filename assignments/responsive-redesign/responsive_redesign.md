# Responsive Redesign

## Website Entry Point
### Laptop
![[Screenshot 2025-03-19 at 1.39.49 PM.png]]
### Phone
![[Screenshot 2025-03-19 at 1.40.16 PM.png]]
### Tablet
![[Screenshot 2025-03-19 at 1.42.16 PM.png]]

## Introduction
Hi everyone, today we will be redesigning the webpage of a local restaurant near my school. The restaurant is called **Heng Thai** that features southeast asian foods. It is a popular hub for students. However, its current websites has rather outdated design as well as some key accessibility issues. The flow of this page goes:
1. **Identification of issues** with the current website
2. **Design guide & mockups** for the new design
3. A brief overview of the new implementation and discussion on how the new design **addresses the problems** we identified.


## Current Issues
First I am going to identify problems with the current design of the interface of Heng Thai restaurant. The theme of my analysis  will be centering around efficiency, learnability, memorability, as well as the conceptual model users develop when they are using the webpage. 

| Issue Type               | Screenshot                                   | Notes                                                                                                                                                                                                                                                                                                                                                                        |     |
| ------------------------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| Efficiency               | ![[Screenshot 2025-03-19 at 1.49.54 PM.png]] | When users first enter the laptop webpage, they immediately have the option to order. However, there are redundant buttons for ordering, both leading users to the same page.                                                                                                                                                                                                |     |
| Efficiency               | ![[Screenshot 2025-03-19 at 2.57.28 PM.png]] | When user access the website from their mobile devices, Facebook and Instagram icon always show on the top menu bar. However, this emphasis was not shown in either the laptop or the tablet interface.                                                                                                                                                                      |     |
| Conceptual Model<br>     | ![[Screenshot 2025-03-19 at 2.31.28 PM.png]] | After user gets to the end of the page, they can see contact information of the restaurant. However, the page allows users to keep scrolling despite there is no additional content at all. This challenges the ususal conceptual model of web page browsing, misleading users to think that there is still more content in the page when there is not. (From laptop access) |     |
| Conceptual Model         | ![[Screenshot 2025-03-23 at 1.47.41 PM.png]] | From desktop access, the menu items are displayed directly using html. However, if the users access the website from mobile devices, they will have to click on a "menu" button that redirects them to a different pdf page. This inconsistency between different platforms challenge the inherent conceptual model users might develop over time.                           |     |
| Learnability             | ![[Screenshot 2025-03-23 at 1.51.17 PM.png]] | If the user want to order an pick-up online, they can click on this button from the website. However, this action also takes the users to a third-party website that is responsible for the ordering service.                                                                                                                                                                |     |
| Efficiency & Readability | ![[Screenshot 2025-03-25 at 9.45.42 AM.png]] | Some of the font colors are clashing with the background logo, making text hard to read, and thereby reducing the efficiency.                                                                                                                                                                                                                                                |     |
| Efficiency               | ![[Screenshot 2025-03-23 at 1.47.41 PM.png]] | Another issue with the desktop version of menu display is that all items from the menu are shown all at once on the home page, making users have to scroll for a long time to get to the section they want. Perhaps we can use categorization to make the website more minimal.                                                                                              |     |
|                          |                                              |                                                                                                                                                                                                                                                                                                                                                                              |     |
|                          |                                              |                                                                                                                                                                                                                                                                                                                                                                              |     |
|                          |                                              |                                                                                                                                                                                                                                                                                                                                                                              |     |

## Accessibility Issues
Using WAIVE, I identified some issues:
1. Redundant links - this aligns with my previous observations too. For example, from the phone access, there are at least 3 different links that the users can click on to order food.
2. Also, WAIVE identified several places with underlined texts that do not serve as links. This also challenges user's conceptual model.
Now, I think both of these two issues identified using WAIVE resulted in a clustered page design. I suppose the main purpose of people visiting this website is to view the menu as well as placing their orders. There is just way too much content for that, making the overall experience overwhelming and tedious. 

## Visual Redesign - design guideline
Now, let's check out our brand new design for Heng Thai! Below is a snapshot of the entire visual design guideline.
![[Screenshot 2025-03-26 at 10.53.47 AM.png]]
For your valuable time, I will not be going over every detail in this design guideline. I will talk about some esstential choices I made when I came up with the new design. 

### Color 
I chose colors that match well with the Thai theme. These colors are found mainly from the common ingredients used in Thai cuisines. For example, green curry, mango, and chili.

### Icons 
For icons, I chose common icons that are intuitive to most of the users. Icons when used appropriately emphasizes the option for users, thereby increasing the effiency of using the webpage. 

### Typography
For simplicity, I am mainly using two fonts - Playfair Display and Poppins. Playfair displays create a sense of elegency, potentially adding to the deemed quality of the restaurant. 

## Visual Redesign - design mockup
I created design mockups for 3 different screen sizes (desktop, tablet, and mobile) using Figma, a tool that allows you to create prototypes for web UI. See below and click on the image too see them in larger sizes! 
![[Screenshot 2025-03-26 at 11.29.07 AM.png]]
![[Screenshot 2025-03-26 at 11.29.16 AM.png]]

## New design

Now, let's go over some of the details of the new design! You could visit the new page via this link. Below I will talk about how the new design address the issues we identified in the first section.
![[Screenshot 2025-03-26 at 11.19.12 AM.png]]
The biggest improvement I wanted to bring to Heng Thai is readability. The original website introduced too many colors, making it overwheming for users. In addition, the contrast between colors was also horrible! Therefore, the new design feature this clean look with solid color backgrounds, making the webpage a lot more readable.

Another key improvement that I implemented was the **menu section**. Previously, we are shoing all the menu items all at once. Since there are many individual items, users have to scroll for a long time to get to a category they want. Now, we use buttons respective to each category on the menu. Users can **click on one of the buttons to see the items in a category**. Alternatively, if they wish to see the full menu pdf, they can click on a link right below this section.
![[Screenshot 2025-03-26 at 11.38.24 AM.png]]
Another improvement I made was the ordering section. Now, users have 3 obvious options to:
1. pick up
2. dine in
3. delivery
This is also one of the parts that I deviated from the design guideline. Initially I planned to use cards for food items. However, it is hard to fit a decent number of menu items into a single page. Therefore, I shifted the use of cards to the ordering section. 

![[Screenshot 2025-03-26 at 11.42.37 AM.png]]
