describe('Calculator app', () => {
  it('should navigate through pages', () => {
    cy.visit('/home');
    cy.visit('/settings');
  });
});

describe('Calculator app', () => {
  it('should change a theme', () => {
    cy.visit('/settings');

    cy.get('select').select(0);
    cy.get('select').select(1);
    cy.get('select').select(2);
  });
});

describe('Calculator app', () => {
  it('should clear the localStorage', () => {
    cy.visit('/settings');

    cy.get('button')
      .click()
      .should(() => {
        expect(localStorage.getItem('history'));
      });

    cy.clearLocalStorage(/history/).should((ls) => {
      expect(ls.getItem('history')).to.be.null;
    });
  });
});

describe('Calculator app', () => {
  it('should display values', () => {
    cy.visit('/home');

    cy.contains('9').click();
    cy.get('#display').contains('9');
  });
});

describe('Calculator app', () => {
  it('should respond to a click', () => {
    cy.visit('/home');

    cy.contains('9').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '9');
    cy.contains('8').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '98');
    cy.contains('7').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '987');
    cy.contains('6').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '9876');
    cy.contains('5').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '98765');
    cy.contains('4').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '987654');
    cy.contains('3').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '9876543');
    cy.contains('2').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '98765432');
    cy.contains('1').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '987654321');
    cy.contains('0').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '9876543210');
    cy.get('[data-name="coma"]').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '9876543210.');
    cy.contains('=').click();
    cy.contains('-').click();
    cy.contains('+').click();
    cy.contains('*').click();
    cy.contains('/').click();
    cy.contains('%').click();
    cy.contains('C').click();
    cy.contains('CE').click();
  });
});

describe('Calculator app', () => {
  it('should concat values', () => {
    cy.visit('/home');

    cy.contains('9').click();
    cy.contains('2').click();
    cy.contains('8').click();
    cy.contains('5').click();
    cy.contains('1').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '92851');
  });
});

describe('Calculator app', () => {
  it('should add values', () => {
    cy.visit('/home');

    cy.contains('7').click();
    cy.contains('+').click();
    cy.get('#display', { timeout: 200 }).contains('7');
    cy.contains('3').click();
    cy.contains('=').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '10');
  });
});

describe('Calculator app', () => {
  it('should add values', () => {
    cy.visit('/home');

    cy.contains('7').click();
    cy.contains('+/-').click();
    cy.get('#display', { timeout: 200 }).contains('-7');
    cy.contains('+').click();
    cy.get('#display', { timeout: 200 }).contains('-7');
    cy.contains('3').click();
    cy.contains('=').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '-4');
  });
});

describe('Calculator app', () => {
  it('should substract values', () => {
    cy.visit('/home');

    cy.contains('9').click();
    cy.contains('-').click();
    cy.get('#display', { timeout: 200 }).contains('9');
    cy.contains('2').click();
    cy.contains('=').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '7');
  });
});

describe('Calculator app', () => {
  it('should multiply values', () => {
    cy.visit('/home');

    cy.contains('4').click();
    cy.contains('*').click();
    cy.get('#display', { timeout: 200 }).contains('4');
    cy.contains('5').click();
    cy.contains('=').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '20');
  });
});

describe('Calculator app', () => {
  it('should divide values', () => {
    cy.visit('/home');

    cy.contains('6').click();
    cy.contains('*').click();
    cy.get('#display', { timeout: 200 }).contains('6');
    cy.contains('2').click();
    cy.contains('=').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '12');
  });
});

describe('Calculator app', () => {
  it('should clear display value', () => {
    cy.visit('/home');

    cy.contains('4').click();
    cy.get('#display', { timeout: 200 }).contains('4');
    cy.contains('8').click();
    cy.get('#display', { timeout: 200 }).contains('48');
    cy.contains('CE').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '0');
  });
});

describe('Calculator app', () => {
  it('should change the sigh of value', () => {
    cy.visit('/home');

    cy.contains('4').click();
    cy.get('#display', { timeout: 200 }).contains('4');
    cy.contains('+/-').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '-4');
    cy.contains('+/-').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '4');
  });
});

describe('Calculator app', () => {
  it('should show the remainder of division', () => {
    cy.visit('/home');

    cy.contains('9').click();
    cy.get('#display', { timeout: 200 }).contains('9');
    cy.contains('%').click();
    cy.contains('8').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '8');
    cy.contains('=').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '1');
  });
});

describe('Calculator app', () => {
  it('should slice display value', () => {
    cy.visit('/home');

    cy.contains('2').click();
    cy.get('#display', { timeout: 200 }).contains('2');
    cy.contains('7').click();
    cy.get('#display', { timeout: 200 }).contains('27');
    cy.contains('C').click();
    cy.get('#display', { timeout: 400 }).contains('2');
  });
});

describe('Calculator app', () => {
  it('should put the operation in history', () => {
    cy.visit('/home');

    cy.contains('6').click();
    cy.contains('*').click();
    cy.get('#display', { timeout: 200 }).contains('6');
    cy.contains('2').click();
    cy.contains('=').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '12');
    cy.get('#history p').last().should('have.text', '6 * 2');
  });
});

describe('Calculator app', () => {
  it('should clear the history', () => {
    cy.visit('/home');

    cy.contains('6').click();
    cy.contains('*').click();
    cy.get('#display', { timeout: 200 }).contains('6');
    cy.contains('2').click();
    cy.contains('=').click();
    cy.get('#display', { timeout: 200 }).should('have.text', '12');
    cy.get('#history p').last().should('have.text', '6 * 2');

    cy.visit('/settings');

    cy.get('button')
      .click()
      .should(() => {
        expect(localStorage.getItem('history'));
      });

    cy.clearLocalStorage(/history/).should((ls) => {
      expect(ls.getItem('history')).to.be.null;
    });

    cy.visit('/home');
    cy.get('#history').not('p');
  });
});
