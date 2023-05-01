import { createSlice } from '@reduxjs/toolkit';

const researchPublicationAndProjectArrTest = [
  // - id serial primary_key
  // - category_name text
  // - img_file_path text
  // - view_count integer
  // - title text
  // - author_img_file_path text
  // - author_name text
  // - link text
  {
    id: 1,
    category_name: 'Area-BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 2,
    category_name: 'Area-BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 3,
    category_name: 'Area-BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 4,
    category_name: 'Area-BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 5,
    category_name: 'Area-BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 6,
    category_name: 'Area-BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 7,
    category_name: 'Area-BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 8,
    category_name: 'Area-BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 9,
    category_name: 'Area-BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 10,
    category_name: 'BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 11,
    category_name: 'BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 12,
    category_name: 'BCM',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 13,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 14,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 15,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 16,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 17,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 18,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 19,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 20,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 21,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 22,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 23,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 24,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 25,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
  {
    id: 26,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Business Continuity Management toward Public Healthcare Systems during the Disaster',
    author_img_file_path: '',
    author_name: 'David Beckham',
    link: 'https://google.com',
  },
  {
    id: 27,
    category_name: 'Disaster',
    img_file_path: '',
    view_count: 100,
    title: 'Area-Business Continuity Management',
    author_img_file_path: '',
    author_name: 'Michele Morrone',
    link: 'https://google.com',
  },
];

const allMemberArrTest = [
  // - id serial primary_key
  // - status text
  // - type text
  // - img_file_path text
  // - name text
  // - education_arr text[]
  // - publication_id_arr integer[]
  {
    id: 1,
    status: 'current',
    type: 'member',
    img_file_path: '',
    name: 'Associate Professor Natt Leelawat, D.Eng.',
    rank: 'Head of DRMIS',
    education_arr: [
      'D.Eng. (Industrial Engineering and Management), Tokyo Institute of Technology, Japan',
      'M.Eng. (Industrial Engineering and Management), Tokyo Institute of Technology, Japan',
      'B.Sc. (First Class Honours) (Information Technology), Sirindhorn International Institute of Technology, Thammasat University, Thailand',
    ],
    publication_id_arr: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    status: 'current',
    type: 'member',
    img_file_path: '',
    name: 'Assistant Professor Supattra Visessri, Ph.D.',
    rank: 'Deputy Head of DRMIS',
    education_arr: [
      'Ph.D. (Environmental and Water Resources Engineering), Imperial College of Science, Techology and Medicine London, UK',
      'M.Sc. (Hydrology and Business Management), Imperial College of Science, Technology and Medicine London, UK',
      'MBA (Interbusiness Management & Finance), Thammasat University, Thailand',
      'B.Eng. (Irrigation), Kasetsart Univesity, Thailand',
    ],
    publication_id_arr: [6, 7, 8, 9, 10],
  },
  {
    id: 3,
    status: 'current',
    type: 'member',
    img_file_path: '',
    name: 'Assistant Professor Prasert Akkharaprathomphong',
    rank: 'Faculty Member of DRMIS',
    education_arr: [
      'D.Eng. (Industrial Engineering and Management), Tokyo Institute of Technology, Japan',
      'M.Eng. (Industrial Engineering and Management), Tokyo Institute of Technology, Japan',
      'B.Sc. (First Class Honours) (Information Technology), Sirindhorn International Institute of Technology, Thammasat University, Thailand',
    ],
    publication_id_arr: [11, 12, 13],
  },
  {
    id: 4,
    status: 'current',
    type: 'member',
    img_file_path: '',
    name: 'Assistant Professor Chatpan Chintanapakdee, Ph.D.',
    rank: 'Faculty Member of DRMIS',
    education_arr: [
      'Ph.D. (Environmental and Water Resources Engineering), Imperial College of Science, Techology and Medicine London, UK',
      'M.Sc. (Hydrology and Business Management), Imperial College of Science, Technology and Medicine London, UK',
      'MBA (Interbusiness Management & Finance), Thammasat University, Thailand',
      'B.Eng. (Irrigation), Kasetsart Univesity, Thailand',
    ],
    publication_id_arr: [14, 15],
  },
  {
    id: 5,
    status: 'current',
    type: 'member',
    img_file_path: '',
    name: 'Jing Tang, D.Eng.',
    rank: 'Faculty Member of DRMIS',
    education_arr: [
      'D.Eng. (Industrial Engineering and Management), Tokyo Institute of Technology, Japan',
      'M.Eng. (Industrial Engineering and Management), Tokyo Institute of Technology, Japan',
      'B.Sc. (First Class Honours) (Information Technology), Sirindhorn International Institute of Technology, Thammasat University, Thailand',
    ],
    publication_id_arr: [16, 17, 18, 19, 20],
  },
  {
    id: 6,
    status: 'current',
    type: 'visiting member',
    name: 'Professor Watanabe Kenji, Ph.D.',
    education_arr: ['Nagoya Institute of Technology, Japan'],
    publication_id_arr: [16, 17, 18, 19, 20],
  },
  {
    id: 7,
    status: 'current',
    type: 'visiting member',
    img_file_path: '',
    name: 'Project Associate Professor Kodaka Akira, Ph.D.',
    education_arr: ['Keio University, Japan'],
    publication_id_arr: [16, 20],
  },
  {
    id: 8,
    status: 'current',
    type: 'visiting member',
    name: 'Ampan Laosunthara',
    education_arr: ['Tokyo Institute of Technology, Japan'],
    publication_id_arr: [16, 17, 18, 20],
  },
  {
    id: 9,
    status: 'current',
    type: 'visiting member',
    name: 'Kodchakorn Krutphong',
    education_arr: ['Mahidol University Kanchanaburi Campus, Thailand'],
    publication_id_arr: [16, 19, 20],
  },
  {
    id: 10,
    status: 'current',
    type: 'graduate student',
    name: 'Mr. Alfan Kurnia Yudha',
    rank: 'Ph.D. student',
  },
  {
    id: 11,
    status: 'current',
    type: 'graduate student',
    name: 'Mr. Alfan Kurnia Yudha',
    rank: 'Ph.D. student',
    publication_id_arr: [16, 20],
  },
  {
    id: 12,
    status: 'current',
    type: 'graduate student',
    name: 'Mr. Alfan Kurnia Yudha',
    rank: 'Ph.D. student',
  },
  {
    id: 13,
    status: 'current',
    type: 'graduate student',
    name: 'Mr. Alfan Kurnia Yudha',
    rank: "Master's student",
  },
  {
    id: 14,
    status: 'current',
    type: 'graduate student',
    name: 'Mr. Alfan Kurnia Yudha',
    rank: "Master's student",
    publication_id_arr: [16, 19, 20],
  },
  {
    id: 15,
    status: 'current',
    type: 'undergraduate student',
    name: 'Mr. Alfan Kurnia Yudha',
  },
  {
    id: 16,
    status: 'current',
    type: 'undergraduate student',
    name: 'Mr. Alfan Kurnia Yudha',
  },
  {
    id: 17,
    status: 'current',
    type: 'undergraduate student',
    name: 'Mr. Alfan Kurnia Yudha',
  },
  {
    id: 18,
    status: 'current',
    type: 'undergraduate student',
    name: 'Mr. Alfan Kurnia Yudha',
  },
  {
    id: 19,
    status: 'current',
    type: 'undergraduate student',
    name: 'Mr. Alfan Kurnia Yudha',
  },
  {
    id: 20,
    status: 'current',
    type: 'undergraduate student',
    name: 'Mr. Alfan Kurnia Yudha',
  },
];

const memberPublicationArrTest = [
  //    - id serial primary_key
  //    - title text
  //    - link text
  { id: 1, title: 'ACM', link: 'https://google.com' },
  { id: 2, title: 'Google Scholar', link: 'https://google.com' },
  { id: 3, title: 'IEEE', link: 'https://google.com' },
  { id: 4, title: 'ORCID', link: 'https://google.com' },
  { id: 5, title: 'Scopus', link: 'https://google.com' },
  { id: 6, title: 'ACM', link: 'https://google.com' },
  { id: 7, title: 'Google Scholar', link: 'https://google.com' },
  { id: 8, title: 'IEEE', link: 'https://google.com' },
  { id: 9, title: 'ORCID', link: 'https://google.com' },
  { id: 10, title: 'Scopus', link: 'https://google.com' },
  { id: 11, title: 'ACM', link: 'https://google.com' },
  { id: 12, title: 'Google Scholar', link: 'https://google.com' },
  { id: 13, title: 'IEEE', link: 'https://google.com' },
  { id: 14, title: 'ORCID', link: 'https://google.com' },
  { id: 15, title: 'Scopus', link: 'https://google.com' },
  { id: 16, title: 'ACM', link: 'https://google.com' },
  { id: 17, title: 'Google Scholar', link: 'https://google.com' },
  { id: 18, title: 'IEEE', link: 'https://google.com' },
  { id: 19, title: 'ORCID', link: 'https://google.com' },
  { id: 20, title: 'Scopus', link: 'https://google.com' },
];

const resourceSlice = createSlice({
  name: 'resource',
  initialState: { researchPublicationArr: [], projectArr: [], allMemberArr: [], memberPublicationArr: [] },
  reducers: {
    setResearchPublicationArr(state, action) {
      state.researchPublicationArr = action.payload || researchPublicationAndProjectArrTest;
    },
    setProjectArr(state, action) {
      state.projectArr = action.payload || researchPublicationAndProjectArrTest;
    },
    setAllMember(state, action) {
      state.allMemberArr = action.payload || allMemberArrTest;
    },
    setMemberPublicationArr(state, action) {
      state.memberPublicationArr = action.payload || memberPublicationArrTest;
    },
  },
});

export const resourceActions = resourceSlice.actions;
export default resourceSlice.reducer;
