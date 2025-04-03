const courseData = {
    title: "Introductory AI Course",
    weeks: [
      {
        id: 1,
        title: "Module 1: Python Programming",
        slide: true,
        codebook: true,
        mcq: true,
        handsOn: true,
        stats: "7 / 7 | 30hrs",
        lessons: [
          { id: 1, title: "Students Onboarding", duration: "2hrs", slide: false, mcq:"https://docs.google.com/forms/d/e/1FAIpQLSdQa8ufEnH6IraES8r0oeKOMHVqrRa3KA79jqLQxL_J7Pwlpg/viewform", handsOn:"https://forms.gle/SvkyWtC2Gc3BmEYF9", completed: true },
          { id: 2, title: "IDEs  and  setting up environments", duration: "4hrs", slide: "https://www.canva.com/design/DAGf-ih05_k/sDDCzAc1U_oiD5hT-1DxmQ/view", codebook: false, mcq: "https://forms.gle/zmLxugiDqDT9kiJE8", handsOn: false, completed: true },
          { id: 3, title: "Introduction to Python Datatypes and Structures", duration: "6hrs", slide: "https://www.canva.com/design/DAGg3an09IQ/c7I6EBov8Oy-z1U6okEVug/view", codebook: "https://github.com/Publica-AI/6-weeks-Introductory-AI-course/blob/main/Python_Programming/Introduction%20to%20Python/Publica_AI_Introduction_to_python.ipynb", mcq: "https://forms.gle/v4Uro4GWfK6phE199", handsOn: "https://github.com/Publica-AI/6-weeks-Introductory-AI-course/blob/main/Python_Programming/Introduction%20to%20Python/Publica_AI_Introduction_to_python_Assignment.ipynb", completed: true },
          { id: 4, title: "Advance data structures and control flow", duration: "6hrs", slide: "https://www.canva.com/design/DAGhUrRFdF4/GdzHfhAG9BpeSMdHcrw0Tw/view", codebook: "https://github.com/Publica-AI/6-weeks-Introductory-AI-course/blob/main/Python_Programming/Advanced%20Data%20Structures/6_weeks_PublicaAI_Course_Advance_data_structure_and_control_flow%20(2).ipynb", mcq:"https://docs.google.com/forms/d/e/1FAIpQLScAygheCZhi9pmFl50DbAJJCBV4bg5PbWULpTZ6AsrmD_X0Jw/viewform", handsOn: "https://github.com/Publica-AI/6-weeks-Introductory-AI-course/blob/main/Python_Programming/Advanced%20Data%20Structures/6_weeks_PublicaAI_Course_Advance_data_structure_and_control_flow_class_task.ipynb", completed: true },
          { id: 5, title: "File Handling", duration: "6hrs", slide: "https://www.canva.com/design/DAGg3ZcfG-U/tvtbmiDseGWHI0etQrG5zw/view", codebook: "https://github.com/Publica-AI/6-weeks-Introductory-AI-course/blob/main/Python_Programming/File%20I-O%20Handling/Publica_AI_File_input_and_output_operations.ipynb", mcq:"https://forms.gle/LmuFNNteWxZd8icu8", handsOn: "https://github.com/Publica-AI/6-weeks-Introductory-AI-course/blob/main/Python_Programming/File%20I-O%20Handling/Publica_AI_File_input_and_output_operations_Assignment.ipynb", completed: true },
          { id: 6, title: "Functions", duration: "6hrs", slide: "https://www.canva.com/design/DAGg3Y_0lzk/KW8rw83Zmz73ECJO1U7kFg/view", codebook: "https://github.com/Publica-AI/6-weeks-Introductory-AI-course/blob/main/Python_Programming/Python%20Functions/Publica_AI_Python_functions.ipynb", mcq:"https://forms.gle/kAECH91tNbqbYfiL7", handsOn: "https://github.com/Publica-AI/6-weeks-Introductory-AI-course/blob/main/Python_Programming/Python%20Functions/Publica_AI_Python_functions_Assignment.ipynb", completed: true },
        ]
      },
      {
        id: 2,
        title: "Module 2: Data Preprocessing",
        slide: true,
        codebook: true,
        mcq: true,
        handsOn: true,
        stats: "7 / 7 | 34hrs",
        lessons: [
          { id: 1, title: "Introduction to Data and Data Analysis", duration: "6hrs", slide: "https://www.canva.com/design/DAGg3rfAYEE/RIK-6o0s6q5yytu93XP5VQ/view", codebook: false, mcq:"https://forms.gle/fokccotDifHveoEQ6", handsOn: false, completed: false },
          { id: 2, title: "Introduction to Numpy", duration: "4hrs", slide: "https://www.canva.com/design/DAGdwrd8aig/VzkNzVEGCzO7aqKILUWSdQ/view", codebook: "https://github.com/Publica-AI/data-team-course/blob/main/Machine_Learning/2_Introduction_To_Numpy_Revised.ipynb", mcq:"https://forms.gle/TopQNKME1KxMDBNB9", handsOn: false, completed: false },
          { id: 3, title: "Introduction to Pandas(Data Manipulation)", duration: "4hrs", slide: "https://www.canva.com/design/DAGiGV3fniQ/MGcYemiGfZmY-v02ISQbmQ/view", codebook: "https://github.com/Publica-AI/data-team-course/blob/main/Machine_Learning/3_Introduction%20to%20Pandas_Revised.ipynb", mcq:"https://forms.gle/2EfBPnT228jy2gmTA", handsOn: false, completed: false },
          { id: 4, title: "Visualization", duration: "4hrs", slide: "https://www.canva.com/design/DAGgeRs9dhk/v0H0cd3QObU29f-Jifxzgg/view", codebook: "https://github.com/Publica-AI/data-team-course/blob/main/Machine_Learning/7_Visualization_With_Seaborn_and_Matplotlib_Revised.ipynb", mcq:"https://forms.gle/6R4N5j8qG8uG9K9q9", handsOn: "https://docs.google.com/document/d/1AmQxEUBG8KkVJmF_n0lim-x36s6HZPpC-gaQQyq7rio/edit?usp=sharing", completed: false },
          { id: 5, title: "Exploratory Data Analysis(EDA)", duration: "4hrs", slide: "https://www.canva.com/design/DAGiGdznUUA/6wpkbWb4wnc7LqsMK7QQSQ/view", codebook: "https://github.com/Publica-AI/data-team-course/blob/main/Machine_Learning/6_Exploratory_Data_Analysis_Revised.ipynb", mcq:"https://forms.gle/Pm3E5LAjsjJLgrPVA", handsOn: false, completed: false },
          { id: 6, title: "Data Cleaning", duration: "6hrs", slide: true, codebook: true, mcq:true, handsOn: true, completed: false },
          { id: 7, title: "Data Preprocessing", duration: "6hrs", slide: "https://www.canva.com/design/DAGiGbE5gQQ/JY5Y-QNi4z_H5MQpubWzRw/view", codebook: "https://github.com/Publica-AI/data-team-course/blob/main/Machine_Learning/11_Data_Preprocessing.ipynb", mcq:"https://forms.gle/CSH1Bmhx786dq52e7", handsOn: false, completed: false },
        ]
      },
      {
        id: 3,
        title: "Module 3: Supervised and Unsupervised Learning",
        slide: true,
        codebook: true,
        mcq: true,
        handsOn: true,
        stats: "5 / 5 | 32hrs",
        lessons: [
          { id: 1, title: "ML_Algorithms and Training  Models", duration: "6hrs", slide: "https://www.canva.com/design/DAGgv-03uiY/eniB1dQj5odfYTVCqXJXYA/view", codebook: "https://github.com/Publica-AI/data-team-course/blob/main/Machine_Learning/13_Training_A_Model.ipynb", mcq:"https://forms.gle/yU5DvuvRPzP4AVD4A", handsOn: false, completed: false },
          { id: 2, title: "Evaluating a Model", duration: "6hrs", slide: "https://www.canva.com/design/DAGiGX4zCk8/xWqav9ZD1LWd7s0nLinOTw/view", codebook: "https://github.com/Publica-AI/data-team-course/blob/main/Machine_Learning/14_Evaluating_A_Model.ipynb", mcq:"https://forms.gle/yU5DvuvRPzP4AVD4A", handsOn: false, completed: false },
          { id: 3, title: "Optimzing ML models", duration: "6hrs", slide: "https://www.canva.com/design/DAGiGQlexvc/baFLtuRnwNyZ-fAJUjhebA/view", codebook: "https://github.com/Publica-AI/data-team-course/blob/main/Machine_Learning/15_Improving_A_Model.ipynb", mcq:"https://forms.gle/3Kqg79tBy4URqdaw9", handsOn: "https://docs.google.com/document/d/1c-lkYQonOGx57MwR2uJYoJrgfWvzxnMIMhJuKjCYIDk/edit?usp=sharing", completed: false },
          { id: 4, title: "Gradio and Streamlit", duration: "6hrs", slide: "https://www.canva.com/design/DAGh_4NYcz0/o0rVA3rJfM1keuEtI0PjKw/view", codebook: "https://github.com/Publica-AI/data-team-course/blob/main/Machine_Learning/gradio.py", mcq: "https://forms.gle/tAQChHn5NmThRNr9A", handsOn: false, completed: false },
          { id: 5, title: "End of Streak project", duration: "8hrs", slide: false, codebook: false, mcq:"https://forms.gle/SvkyWtC2Gc3BmEYF9", handsOn: "https://docs.google.com/document/d/1kBTYFoZN8TnVmQ_YCsI1ywefzH75tFjqioFgD3lqVpc/edit?usp=sharing", completed: false },
        ]
      },
      ]
    tabs: ["Course content", "Overview", "Certificate", "Assessment"]
  };
  
  export default courseData;
















