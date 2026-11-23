
const scenario = async function (page) {
    await page.goto('trending', { waitUntil: 'networkidle' });
    await page.addMilestone('Chargement de trending');
    await page.waitForTimeout(3000);
    await Promise.all([
        page.waitForNavigation({ waitUntil: 'networkidle' }),
        page.click('main figure:nth-child(4)'),
    ]);
    await page.addMilestone('Chargement de la page d\'une vidéo');
    await page.waitForTimeout(3000);    
};

module.exports = scenario

