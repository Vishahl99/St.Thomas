// // const navbar= document.querySelector('.gallery_img');
// let s  = [
//     "It", "is", "my", "proud", "privilege", "to", "warmly", "welcome", "you", "into", "the", "prospectus", "of", "this", "learning", "community.", 
//     "The", "St.", "Thomas", "School", "is", "dedicated", "to", "develop", "skilled", "students", "who", "can", "pursue", "their", "interest", "and", "strengths", "to", "the", "best", "of", "their", "ability", "so", "that", "our", "enriched", "students", "merge", "into", "the", "society", "building", "a", "strong", "generation", "for", "a", "better", "world", "tomorrow", "through", "dynamic", "education.",
//     ".", ".", 
//     "We", "are", "committed", "to", "work", "collaboratively", "with", "parents", "to", "nurture", "an", "individual", "who", "possesses", "love", "for", "nation,", "society", "community", "&", "family", "values.", "We", "also", "expect", "that", "we", "as", "a", "family", "we", "will", "encourage", "the", "students", "to", "think", "critically.", 
//     ".", ".", 
//     "We", "work", "with", "the", "core", "belief", "that", "wisdom", "can", "be", "cultivated", "gradually", "amongst", "all", "individuals.", "It", "is", "not", "enough", "to", "make", "children", "literate", "and", "academically", "intelligent", "what", "is", "more", "important", "is", "to", "make", "them", "wise", "so", "that", "they", "are", "able", "to", "use", "their", "intelligence", "judiciously.", "The", "school", "therefore", "has", "undertaken", "a", "great", "leap", "in", "integrating", "information", "and", "communication", "technology", "into", "the", "classroom", "teaching", "and", "learning", "process.",
//     ".", ".", 
//     "I", "would", "like", "to", "end", "with", "the", "words", "of", "Albert", "Einstein:", "imagination", "is", "more", "important", "than", "knowledge.", "For", "while", "knowledge", "defines", "all", "we", "currently", "know", "and", "understand,", "imagination", "points", "to", "all", "we", "might", "yet", "discover", "and", "create.",
//     ".", ".", 
//     "Thinking", "critically", "is", "the", "pinnacle", "of", "the", "accumulation", "of", "knowledge", "and", "experience."
// ];
// const p1= document.querySelector('.principle_img');
// const p= document.querySelector('.p_img1')
// // const p_img= document.querySelector('.principle_img');
// let counter=0;
// //      p1.addEventListener('mouseover', function(){         
// //         const intervalId = setInterval(function() {
// //         if (counter < s.length) {
// //             if (s[counter]  === '.' ) {
// //                 const lineBreak = document.createElement('br');
// //                 p.appendChild(lineBreak);
// //                 counter++;
// //             }
// //             else{
// //             const span = document.createElement('span');
// //             span.textContent = s[counter] + ' '; 
// //             p.appendChild(span);
// //             counter++;}
// //         } else {
// //             clearInterval(intervalId);
// //         }
// //     }, 40);
// //    })

//     const targetDiv = document.querySelector('.principle_img');
// const element=document.querySelector('.principle_img')
//     // Function to check if a target element is in view
//     function isInView(element) {
//         const rect = element.getBoundingClientRect();
//         return (
//             rect.top >= 0 &&
//             rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//         );
//     }

//     // Function to handle the scroll event
//     function handleScroll() {
//         if (isInView(targetDiv)) {
                     
//                         const intervalId = setInterval(function() {
//                         if (counter < s.length) {
//                             if (s[counter]  === '.' ) {
//                                 const lineBreak = document.createElement('br');
//                                 p.appendChild(lineBreak);
//                                 counter++;
//                             }
//                             else{
//                             const span = document.createElement('span');
//                             span.textContent = s[counter] + ' '; 
//                             p.appendChild(span);
//                             counter++;}
//                         } else {
//                             clearInterval(intervalId);
//                         }
//                     }, 100);
//                    }


//             // Trigger your event or do something here
//         }
    

//     // Add scroll event listener to the window
//     window.addEventListener('scroll', handleScroll);

