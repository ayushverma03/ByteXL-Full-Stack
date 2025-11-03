// Mocked S3 upload (local only)
module.exports = {
  uploadFile: async (file) => {
    // In real AWS setup, use aws-sdk to upload
    return "https://example.com/mock-image.jpg";
  },
};
