//unit test


test('write test', () => {
    
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.username,
          title,
          desc,
          category
        };
        if (file) {
          const data = new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
    
          newPost.photo = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axios.post("/posts", newPost);
          window.location.replace("/post/" + res.data._id);
        } catch (err) {}
      };

});