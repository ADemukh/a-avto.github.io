module.exports = res => ({
    success: (data) => {
        res.json({
            item: data,
        });
    },
    error: (data) => {
        res.json({
            error: data,
        });
    },
});
