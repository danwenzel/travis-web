import PageObject from 'travis/tests/page-object';

let {
  collection,
  hasClass,
  text,
  visitable
} = PageObject;

function hooksCollection(scope) {
  return collection({
    scope: scope,
    itemScope: '.profile-hooklist .row',

    item: {
      name: text('a.profile-repo'),
      isActive: hasClass('active', '.switch--icon')
    }
  });
}

export default PageObject.create({
  visit: visitable('profile/:username'),
  name: text('.profile-header h1'),

  administerableHooks: hooksCollection('#administerable-hooks'),
  unadministerableHooks: hooksCollection('#unadministerable-hooks')
});