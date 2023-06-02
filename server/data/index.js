import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "first",
    lastName: "last",
    email: "test@gmail.com",
    password: "aoivv0au3u",
    picturePath: "profile.jpeg",
    friends: [],
    location: "Columbus, OH",
    status: "test status",
    viewedProfile: 11,
    impressions: 1111,
    createdAt: 111111,
    updatedAt: 111111,
    __v: 0,
  }
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "first",
    lastName: "last",
    location: "Columbus, OH",
    description: "description",
    picturePath: "post.jpeg",
    userPicturePath: "profile.jpeg",
    likes: new Map([
      [userIds[0], true],
    ]),
    comments: [
      "test comment",
      "second test comment",
    ],
  }
];