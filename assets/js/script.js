$(document).ready(() => {
    console.log('yo');

    let qbDollars = 0;
    let rb1Dollars = 0;
    let rb2Dollars = 0;
    let wr1Dollars = 0;
    let wr2Dollars = 0;
    let wr3Dollars = 0;
    let teDollars = 0;
    let flxDollars = 0;
    let dstDollars = 0;
    let bench1Dollars = 0;
    let bench2Dollars = 0;
    let bench3Dollars = 0;
    let bench4Dollars = 0;
    let bench5Dollars = 0;
    let bench6Dollars = 0;
    let bench7Dollars = 0;
    let totalDollars

    getTotal = () => {
        totalDollars = qbDollars + rb1Dollars + rb2Dollars + wr1Dollars + wr2Dollars + wr3Dollars + teDollars + flxDollars + dstDollars + bench1Dollars + bench2Dollars + bench3Dollars + bench4Dollars + bench5Dollars + bench6Dollars + bench7Dollars;

        $('#totalDollars').text(totalDollars);

        if (totalDollars > 200) {
            $('#total').addClass('totalOver').removeClass('totalOK');
        } else {
            $('#total').addClass('totalOK').removeClass('totalOver');
        }
    };

    $('#logo').click(() => {
        qbDollars = Number($('#qbPrice').val());
        rb1Dollars = Number($('#rb1Price').val());
        rb2Dollars = Number($('#rb2Price').val());
        wr1Dollars = Number($('#wr1Price').val());
        wr2Dollars = Number($('#wr2Price').val());
        wr3Dollars = Number($('#wr3Price').val());
        teDollars = Number($('#tePrice').val());
        flxDollars = Number($('#flxPrice').val());
        dstDollars = Number($('#dstPrice').val());
        bench1Dollars = Number($('#bench1Price').val());
        bench2Dollars = Number($('#bench2Price').val());
        bench3Dollars = Number($('#bench3Price').val());
        bench4Dollars = Number($('#bench4Price').val());
        bench5Dollars = Number($('#bench5Price').val());
        bench6Dollars = Number($('#bench6Price').val());
        bench7Dollars = Number($('#bench7Price').val());

        getTotal();
    });

    // Increase Functionality

    $('#qbPriceIncrease').click(() => {
        qbDollars++
        $('#qbPrice').val(qbDollars);
        getTotal();
    })
    $('#rb1PriceIncrease').click(() => {
        rb1Dollars++
        $('#rb1Price').val(rb1Dollars);
        getTotal();
    })
    $('#rb2PriceIncrease').click(() => {
        rb2Dollars++
        $('#rb2Price').val(rb2Dollars);
        getTotal();
    })
    $('#wr1PriceIncrease').click(() => {
        wr1Dollars++
        $('#wr1Price').val(wr1Dollars);
        getTotal();
    })
    $('#wr2PriceIncrease').click(() => {
        wr2Dollars++
        $('#wr2Price').val(wr2Dollars);
        getTotal();
    })
    $('#wr3PriceIncrease').click(() => {
        wr3Dollars++
        $('#wr3Price').val(wr3Dollars);
        getTotal();
    })
    $('#tePriceIncrease').click(() => {
        teDollars++
        $('#tePrice').val(teDollars);
        getTotal();
    })
    $('#flxPriceIncrease').click(() => {
        flxDollars++
        $('#flxPrice').val(flxDollars);
        getTotal();
    })
    $('#dstPriceIncrease').click(() => {
        dstDollars++
        $('#dstPrice').val(dstDollars);
        getTotal();
    })
    $('#bench1PriceIncrease').click(() => {
        bench1Dollars++
        $('#bench1Price').val(bench1Dollars);
        getTotal();
    })
    $('#bench2PriceIncrease').click(() => {
        bench2Dollars++
        $('#bench2Price').val(bench2Dollars);
        getTotal();
    })
    $('#bench3PriceIncrease').click(() => {
        bench3Dollars++
        $('#bench3Price').val(bench3Dollars);
        getTotal();
    })
    $('#bench4PriceIncrease').click(() => {
        bench4Dollars++
        $('#bench4Price').val(bench4Dollars);
        getTotal();
    })
    $('#bench5PriceIncrease').click(() => {
        bench5Dollars++
        $('#bench5Price').val(bench5Dollars);
        getTotal();
    })
    $('#bench6PriceIncrease').click(() => {
        bench6Dollars++
        $('#bench6Price').val(bench6Dollars);
        getTotal();
    })
    $('#bench7PriceIncrease').click(() => {
        bench7Dollars++
        $('#bench7Price').val(bench7Dollars);
        getTotal();
    })

    // Decrease functionality

    $('#qbPriceDecrease').click(() => {
        qbDollars--
        $('#qbPrice').val(qbDollars);
        getTotal();
    })
    $('#rb1PriceDecrease').click(() => {
        rb1Dollars--
        $('#rb1Price').val(rb1Dollars);
        getTotal();
    })
    $('#rb2PriceDecrease').click(() => {
        rb2Dollars--
        $('#rb2Price').val(rb2Dollars);
        getTotal();
    })
    $('#wr1PriceDecrease').click(() => {
        wr1Dollars--
        $('#wr1Price').val(wr1Dollars);
        getTotal();
    })
    $('#wr2PriceDecrease').click(() => {
        wr2Dollars--
        $('#wr2Price').val(wr2Dollars);
        getTotal();
    })
    $('#wr3PriceDecrease').click(() => {
        wr3Dollars--
        $('#wr3Price').val(wr3Dollars);
        getTotal();
    })
    $('#tePriceDecrease').click(() => {
        teDollars--
        $('#tePrice').val(teDollars);
        getTotal();
    })
    $('#flxPriceDecrease').click(() => {
        flxDollars--
        $('#flxPrice').val(flxDollars);
        getTotal();
    })
    $('#dstPriceDecrease').click(() => {
        dstDollars--
        $('#dstPrice').val(dstDollars);
        getTotal();
    })
    $('#bench1PriceDecrease').click(() => {
        bench1Dollars--
        $('#bench1Price').val(bench1Dollars);
        getTotal();
    })
    $('#bench2PriceDecrease').click(() => {
        bench2Dollars--
        $('#bench2Price').val(bench2Dollars);
        getTotal();
    })
    $('#bench3PriceDecrease').click(() => {
        bench3Dollars--
        $('#bench3Price').val(bench3Dollars);
        getTotal();
    })
    $('#bench4PriceDecrease').click(() => {
        bench4Dollars--
        $('#bench4Price').val(bench4Dollars);
        getTotal();
    })
    $('#bench5PriceDecrease').click(() => {
        bench5Dollars--
        $('#bench5Price').val(bench5Dollars);
        getTotal();
    })
    $('#bench6PriceDecrease').click(() => {
        bench6Dollars--
        $('#bench6Price').val(bench6Dollars);
        getTotal();
    })
    $('#bench7PriceDecrease').click(() => {
        bench7Dollars--
        $('#bench7Price').val(bench7Dollars);
        getTotal();
    })
})